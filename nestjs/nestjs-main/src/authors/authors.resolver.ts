import {
    Args,
    Int,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from "@nestjs/graphql";
import { Author } from "./models/author.model";

@Resolver(() => Author)
export class AuthorsResolver {
    @Query(() => String)
    async author(@Args("id", { type: () => Int }) id: number) {
        console.log(id);

        return new Author();
    }

    @ResolveField()
    async posts(@Parent() author: Author) {
        const { id } = author;
        console.log("set author id in post" + id);
    }
}
