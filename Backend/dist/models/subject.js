"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const student_1 = __importDefault(require("./student"));
//Modelo de objeto que se guarda en la BBDD de MongoDB
const subjectSchema = new mongoose_1.Schema({
    name: {
        type: String
    },
    students: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: student_1.default
        }]
});
//Exportamos modelo para poder usarlo
exports.default = mongoose_1.model('Subject', subjectSchema);
