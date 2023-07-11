import dayjs from "dayjs";
import db from "../database/db.js";
import { transactionsSchema } from "../schemas/transaction.schema.js";

async function getTransactions(req, res) {
    const { user } = res.locals;
    const name = user.name;
    try {
        const transactions = await db.collection("transactions").find({userId:user._id}).toArray();

        return res.status(200).send({transactions, name});
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

async function postTransactions(req, res) {
    const {value, name, type} = req.body;
    const { user } = res.locals;

    const validationSchema = transactionsSchema.validate({value, name, type});

    if(validationSchema.error){
        return res.status(422).send("Todos os campos são obrigatórios")
    }

    try {
        await db.collection("transactions").insertOne({
            userId: user._id,
            value,
            name,
            type,
            date: dayjs().format('DD/MM')
        })
        return res.sendStatus(201);
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
}

export {getTransactions, postTransactions}