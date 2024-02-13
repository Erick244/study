import { Length } from "class-validator";
import { Field, ID, InputType } from "type-graphql";

@InputType()
export class UserInput {
    @Field((_type) => ID)
    id: String;

    @Field()
	@Length(5, 20)
    name: String;
}
