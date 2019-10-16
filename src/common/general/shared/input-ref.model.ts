import { InputType, Field, ID } from "type-graphql";
import { Typegoose } from "@hasezoey/typegoose";

@InputType()
export class InputRef {
    constructor(_id: string) {
        this._id = _id;
    }

    @Field(type => ID)
    _id: string;
}