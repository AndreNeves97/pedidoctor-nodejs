import { Typegoose, prop } from "typegoose";

export class InfoMedicamento extends Typegoose {


    // @prop({ required: true,  ref: Medicamento })
    medicamento: string;

    
    @prop({ required: true })
    dataInicio: Date;

    @prop({ required: true })
    dataFim: Date;
}
