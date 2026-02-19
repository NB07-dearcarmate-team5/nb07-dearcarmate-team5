import prisma from '../prisma/prisma';

export const getDashboardData = async (companyId: number, lastMonthStart: Date) => {

  //모든 계약 상태별 건수 조회
  const statusCounts = await prisma.contract.groupBy({
    by: ['status'],
    where: { companyId: companyId},
    _count: { id: true },
  });

//매출 및 차종별 데이터 조회
  const statsByCar = await prisma.car.findMany({
    where: { companyId },
    select: {
      type: true,
      contracts: {
        where: { 
          status: 'contractSuccessful',
          resolutionDate: { gte: lastMonthStart } 
        },
        select: { contractPrice: true, resolutionDate: true }
      }
    }
  });

  return { statusCounts, statsByCar };
};