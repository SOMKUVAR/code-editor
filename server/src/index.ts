import express from 'express';
import cors from 'cors';
import javaRouter from './route/run-java';

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use("/", javaRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
