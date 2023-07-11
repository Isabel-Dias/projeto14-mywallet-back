import { Router } from "express";
import { AuthSession } from "../middlewares/AuthSession.middleware.js";
import { getTransactions, postTransactions } from "../controllers/transactions.controller.js";
const router = Router();

router.get("/transactions", AuthSession, getTransactions);
router.post("/transactions", AuthSession, postTransactions);

export default router;