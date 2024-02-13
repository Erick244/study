import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { AuthorsModule } from "./authors/authors.module";

@Module({
    imports: [
        AuthorsModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: "schema.gql",
            sortSchema: true,
            playground: true,
            // plugins: [ApolloServerPluginLandingPageLocalDefault()],
        }),
    ],
})
export class AppModule {}
