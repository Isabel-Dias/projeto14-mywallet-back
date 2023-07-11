import bcrypt from "bcrypt"
import db from "../database/db.js";
import { signUpSchema } from "../schemas/auth.schema.js";

export async function signUp(req, res) {
    const user = req.body;

    const validationSchema = signUpSchema.validate(user);

    if(validationSchema.error){
        return res.status(422).send("Todos os campos são obrigatórios")
    }

    try {

        const userExists = await db.collection("users").findOne({email: user.email})

        if(userExists !== null){
            return res.sendStatus(409)
        }
        
        const {name, email, password} = req.body;
        const passwordHash = bcrypt.hashSync(password, 10);

        await db.collection('users').insertOne({ name, email, password: passwordHash }) 
        return res.sendStatus(201)
        
    } catch (error) {
        return console.log(error)
    }
}




