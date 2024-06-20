import { Field, Int, ObjectType } from "@nestjs/graphql";
import { loggerMiddleware } from "../logger.middleware";

@ObjectType()
export class User {
    @Field(() => Int, { middleware: [loggerMiddleware] })
    id: number;

    @Field()
    username: string;

    @Field()
    password: string;
}
