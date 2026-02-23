import { object, string, number, enums, size, partial, Infer, Struct, defaulted, coerce, integer, min, create, optional} from 'superstruct';
import { Request, Response, NextFunction } from 'express';


const CoercedInteger = coerce(
  min(integer(), 1),            
  string(),                    
  (value) => parseInt(value, 10)
);

const Manufacturer = enums(['기아', '현대', '제네시스', '테슬라']);
const CarStatus = enums(['possession', 'contractProceeding', 'contractCompleted']);
const CarType = enums(['세단', '경차', 'SUV']);

export const CreateCarBody = object({
  companyId: optional(number()),
  carNumber: size(string(), 1, 20),
  manufacturer: Manufacturer,
  model: size(string(), 1, 50),
  type: CarType,
  manufacturingYear: number(),
  mileage: number(),
  price: number(),
  accidentCount: number(),
  explanation: optional(string()),
  accidentDetails: optional(string()),
  status: defaulted(CarStatus, 'possession'),
});

export const UpdateCarBody = partial(object({
  companyId: optional(number()),
  carNumber: size(string(), 1, 20),
  manufacturer: Manufacturer,
  model: size(string(), 1, 50),
  type: optional(CarType),
  manufacturingYear: number(),
  mileage: number(),
  price: number(),
  accidentCount: number(),
  explanation: optional(string()),
  accidentDetails: optional(string()),
}));

export const CarListQuery = object({
  page: defaulted(CoercedInteger, 1),
  pageSize: defaulted(CoercedInteger, 10),
  status: defaulted(CarStatus, 'possession'),
  searchBy: defaulted(enums(['carNumber', 'model']), 'carNumber'),
  keyword: defaulted(string(), ''),
});

export const CarIdParams = object({
  carId: CoercedInteger,
});

export const validateRequest = <T, S>(
  location: 'body' | 'params' | 'query',
  struct: Struct<T, S>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const validatedData = create(req[location], struct);
    if (location === 'body') {
      req.body = validatedData;
    } else {
      const target = req[location] as Record<string, unknown>;
      const source = validatedData as Record<string, unknown>;
      
      Object.keys(source).forEach((key) => {
        target[key] = source[key];
      });
    }
    
    next();
  };
};

export type CreateCarBodyType = Infer<typeof CreateCarBody>;
export type UpdateCarBodyType = Infer<typeof UpdateCarBody>;
export type CarListQueryType = Infer<typeof CarListQuery>;
export type CarIdParamsType = Infer<typeof CarIdParams>;