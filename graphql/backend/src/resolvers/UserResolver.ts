import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../models/User";
import crypto from "crypto";
import { UserInput } from "../inputs/UserInput";

@Resolver()
export class UserResolver {
    private data: User[] = [];

    @Query(() => [User])
    async users() {
        return this.data;
    }

    @Mutation(() => User)
    async createUser(@Arg("user") user: UserInput) {
        const newUser = { ...user, id: crypto.randomUUID() };

        this.data.push(newUser);

        return user;
    }
}
