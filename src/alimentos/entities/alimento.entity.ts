import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AlimentoDocument = Alimento & Document;

@Schema()
export class Alimento {
    @Prop({ required: true })
    nome: string;

    @Prop({ required: true })
    quantidade: number;

    @Prop({ required: true })
    vencimento: Date;

    @Prop()
    observacao: string;
}

export const AlimentoSchema = SchemaFactory.createForClass(Alimento);
