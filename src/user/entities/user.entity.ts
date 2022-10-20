import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Exclude } from 'class-transformer';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true })
    compania: string;

    @Prop({ required: true })
    cnpj: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    telefone: string;

    @Prop({ required: true })
    senha: string;

    @Prop({ required: true })
    tipo_compania: string;


}

export const UserSchema = SchemaFactory.createForClass(User);
