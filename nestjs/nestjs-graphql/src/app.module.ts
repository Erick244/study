import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { UsersModule } from "./users/users.module";

@Module({
    imports: [
        UsersModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: "schema.gql",
            playground: false,
            installSubscriptionHandlers: true,
            subscriptions: {
                "graphql-ws": true,
            },
            plugins: [ApolloServerPluginLandingPageLocalDefault()],
        }),
    ],
})
export class AppModule {}
