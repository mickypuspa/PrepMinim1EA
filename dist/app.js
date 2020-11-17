"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
//importar routes
const subjects_routes_1 = __importDefault(require("./routes/subjects.routes"));
const student_routes_1 = __importDefault(require("./routes/student.routes"));
// init
const app = express_1.default();
// settings
app.set('port', process.env.PORT || 3000);
// middlewares
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
// routes
/*app.get('/', (req,res) => {
    return res.send(`The API is at http://localhost:${app.get('port')}`);
});*/
app.use('/subject', subjects_routes_1.default);
app.use('/student', student_routes_1.default);
exports.default = app;
