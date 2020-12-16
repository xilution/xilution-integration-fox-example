import { APIGatewayProxyEventV2, APIGatewayProxyResult } from "aws-lambda";

let response;

export const handler = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResult> => {
  console.log("event: ", JSON.stringify(event, null, 2));
  try {
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "hello-world",
      }),
    };
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};
