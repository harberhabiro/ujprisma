import express from 'express'
import cors from 'cors'
import session from 'express-session'
import * as dotenv from 'dotenv'
dotenv.config();
const app = express();

//middlewares
app.use(express.json());
app.use(cors({origin: process.env.APP_HOST, credentials: true}));
app.use(session({
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET!,
    saveUninitialized: false,
    rolling: false,
    resave: false,
    cookie: {
        maxAge: +process.env.SESSION_IDLE_TIMEOUT!,
        secure: false,
        sameSite: 'lax'
    }
}));

//routes


//server
app.listen(process.env.APP_PORT || 5000, () => console.log(`Server is up on port ${+process.env.APP_PORT! || 5000}`));