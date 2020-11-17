import { model, Schema, Document } from 'mongoose';
import Student, { IStudent } from './student';


//Interfaz para tratar respuesta como documento
export interface ISubject extends Document{
    name: string;
    students: IStudent['_id']; //Relacion con Students
}

//Modelo de objeto que se guarda en la BBDD de MongoDB
const subjectSchema = new Schema({
        name: {
            type: String
        },
        students: [{
            type: Schema.Types.ObjectId,
            ref: Student
        }]
    });

    
//Exportamos modelo para poder usarlo
export default model <ISubject>('Subject', subjectSchema);