import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';


//importar routes
import subjectRoutes from "./routes/subjects.routes";
import studentRoutes from "./routes/student.routes";

// init
const app = express();

// settings

app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(bodyParser.json());

// routes

/*app.get('/', (req,res) => {
    return res.send(`The API is at http://localhost:${app.get('port')}`);
});*/

app.use('/subject',subjectRoutes);
app.use('/student',studentRoutes);


export default app;