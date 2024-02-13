import {
    ApolloServerPlugin,
    BaseContext,
    GraphQLRequestContext,
    GraphQLRequestListener,
} from "@apollo/server";
import { Plugin } from "@nestjs/apollo";

@Plugin()
export class LoggingPlugin implements ApolloServerPlugin {
    async requestDidStart(
        requestContext: GraphQLRequestContext<BaseContext>,
    ): Promise<void | GraphQLRequestListener<BaseContext>> {
        console.log("Request started");

        return {
            async willSendResponse() {
                console.log("Will send response");
            },
        };
    }
}
