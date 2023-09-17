import express, { Request, Response, NextFunction } from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path'
import connection from './database/db';
import createAdmin from './database/create.admin';
import config from './config/config';

import router from './router/index.router';

const app = express();

app.use(cors({
    credentials: true
}))

app.use(bodyParser.json());

/** create a write stream (in append mode) */
var accessLogStream = fs.createWriteStream(path.join(__dirname, './logs/access.log'), { flags: 'a' })
 
/** setup the logger */
app.use(morgan('combined', { stream: accessLogStream }))


if(! config.mongo_url) throw new Error("Mongo url is not found. Sorry.");


connection(config.mongo_url ?? process.env.MONGO_URI!);

/** create admin */
createAdmin();

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log(`Server running on ${process.env.APP_URL+':'+ config.port}`)
})

app.use('/api', router())
