import express from 'express';
import cors from 'cors';
import javaRouter from './route/run-java';
import pythonRouter from './route/run-python';
import cppRouter from './route/run-cpp';
import cRouter from './route/run-c';
import javascriptRouter from './route/run-javascript';

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use("/", javaRouter);
app.use("/", pythonRouter);
app.use("/", cppRouter);
app.use("/", cRouter);
app.use("/", javascriptRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
