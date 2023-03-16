import mysql from 'mysql';
import dotenvValues from 'dotenv';

let config = dotenvValues('.env')

// let con = mysql.createConnection({
//     host: "localhost",
//     user: config.SCFL_DB_USER,
//     password: config.SCFL_DB_PWD,
// })

console.log(config.TEST_VAL)