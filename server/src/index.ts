import express from 'express';
import cors from 'cors';
import javaRouter from './route/run-java';
import pythonRouter from './route/run-python';

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use("/", javaRouter);
app.use("/", pythonRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
