import { ObjectType, InputType, Field } from 'type-graphql';

@ObjectType()
export class CoordenadaGeografica  {
    
    @Field()
    latitude: string;
    
    @Field()
    longitude: string;
    
}


@InputType()
export class CoordenadaGeograficaInput  {

    @Field()
    latitude: string;

    @Field()
    longitude: string;

}

@InputType()
export class CoordenadaGeograficaUpdate  {

    @Field()
    latitude: string;

    @Field()
    longitude: string;

}