import { APIGatewayProxyHandler } from "aws-lambda";

export const hello: APIGatewayProxyHandler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello, World!" }),
    };
};
