import { Express as ExpressApp } from "express";
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { env } from "process";

const teamSchema = {
    $jsonSchema: {
        bsonType: "object",
        required: ["name", "city",],
        additionalProperties: false,
        properties: {
            _id: {},
            name: {
                bsonType: "string",
                description: "'name' is required and is a string",
            },
            price: {
                bsonType: "number",
                description: "'price' is required and is a number",
            },
            category: {
                bsonType: "string",
                description: "'category' is required and is a string",
            },
        },
    }
}