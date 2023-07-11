import joi from "joi";

const transactionsSchema = joi.object({
    value: joi.number().required(),
    name: joi.string().required(),
    type: joi.string().required()
})

export {transactionsSchema}