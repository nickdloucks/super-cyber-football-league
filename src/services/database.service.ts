import { Express as ExpressApp } from "express";
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { env } from "process";

const teamSchema = {
    $jsonSchema: {
        bsonType: "object",
        required: ["name", "city", "abrv", "colors"],
        additionalProperties: false,
        properties: {
            _id: {},
            name: {
                bsonType: "string",
                description: "'name' is required and is a string",
            },
            city: {
                bsonType: "string",
                description: "'city' is required and is a string",
            },
            abrv: {
                bsonType: "string",
                description: "'abrv' is required and is a string",
            },
            colors: {
                bsonType: "array",
                description: "'colors' is required and is an array of strings"
            }
        },
    }
}