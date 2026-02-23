import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import path from 'path';
import { errorHandler } from './errors/errorHandler';
import carRoutes from './routes/car.route';
import authRouter from './routes/auth.route';
import userRouter from './routes/user.route';
import companiesRouter from './routes/companies.route';
import customersRouter from './routes/customer.route';
import contractRouter from './routes/contract.route';
import { PORT } from './utils/constants';
import imageRouter from './routes/image.route';
import contractDocumentRouter from './routes/contractDocument.route';
import dashboardRouter from './routes/dashboard.route';
import cors from 'cors';

const app = express();

// 1. 미들웨어 설정
app.use(morgan('dev'));

app.use(
  cors({
    origin: 'https://dearcarmate-team5.onrender.com', // 프론트엔드 주소 (Next.js 포트)
            //'http://localhost:3000',
    credentials: true, // 쿠키나 인증 헤더(Authorization)를 주고받기 위해 필수!
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 2. 라우터 등록

const servers = [
  {
    url: `http://localhost:${PORT}`,
    description: '로컬 개발 서버',
  },
];

if (process.env.RENDER_EXTERNAL_URL) {
  servers.push({
    url: process.env.RENDER_EXTERNAL_URL,
    description: 'Render 배포 서버',
  });
}

const swaggerOptions: swaggerJsDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Dear Carmate',
      version: '1.0.0',
      description: 'NB 7기 5팀 중급 프로젝트 API',
    },
    servers: servers,
  },
  apis: [
    path.join(process.cwd(), './src/docs/swagger.yaml'),
    path.join(process.cwd(), './src/docs/!(swagger).yaml'),
  ],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, undefined, {
    swaggerOptions: {
      tagsSorter: undefined,
      operationsSorter: undefined,
      defaultModelsExpandDepth: -1,
    },
  }),
);
// 라우터 설정 (계획서의 routes 폴더 활용)
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/companies', companiesRouter);
app.use('/customers', customersRouter);
app.use('/contracts', contractRouter);
app.use('/cars', carRoutes);
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));
app.use('/images', imageRouter);
app.use('/contractDocuments', contractDocumentRouter);
app.use('/dashboard', dashboardRouter);

// 3. 에러 핸들러 (모든 라우터 뒤에 위치)
app.use(errorHandler);

// 4. 서버 실행
app.listen(PORT, () => {
  console.log(`🚀 서버가 http://localhost:${PORT} 에서 실행 중입니다!`);
});

export default app;
