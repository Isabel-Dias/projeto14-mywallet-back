import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import joi from "joi";
import dayjs from "dayjs";
import userRoutes from "./routes/users.routes.js"
import transactionsRoutes from "./routes/transactions.routes.js"
dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

app.use(userRoutes)
app.use(transactionsRoutes)


app.listen(5000, () => console.log(`Running server on port 5000`));
