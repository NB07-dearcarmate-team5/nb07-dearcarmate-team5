//express 5 버전부터는 try/catch를 사용하지 않아도 알아서 에러를 넘겨줌
import express from 'express';
import { errorHandler } from './errors/errorHandler';
import contractDocumentRoute from './routes/contractDocument.route';

const app = express();

// 1. 미들웨어 설정
app.use(express.json()); // JSON 요청 바디 파싱
app.use(express.urlencoded({ extended: true })); // URL-encoded 파싱

// 라우터 설정 (계획서의 routes 폴더 활용)
app.use('/contractDocuments', contractDocumentRoute);

//에러 핸들러 설정 (반드시 라우터보다 아래에 위치!)
app.use(errorHandler);

export default app;
