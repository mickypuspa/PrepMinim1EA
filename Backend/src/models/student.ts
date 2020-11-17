import { model, Schema, Document } from 'mongoose';
import Phone, { IPhone} from "./phone";

//Interfaz para tratar respuesta como documento
export interface IStudent extends Document{
    name: string;
    address: string;
    phones: Array<IPhone>;
}

//Modelo de objeto que se guarda en la BBDD de MongoDB
const studentSchema = new Schema({
        name: {
            type: String
        },
        address: {
            type: String
        },
        phones: [{
            type: Object,
            ref: Phone
        }]
    });

    
//Exportamos modelo para poder usarlo
export default model <IStudent>('Student', studentSchema);