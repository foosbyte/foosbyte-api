# Foosbyte Api
##### Examples:
* https://medium.com/a-man-with-no-server/running-aws-lambda-and-api-gateway-locally-serverless-offline-3c64b3e54772
* https://github.com/serverless/examples/tree/master/aws-node-rest-api-with-dynamodb-and-offline
* https://devhub.io/repos/99xt-serverless-react-boilerplate

# Local Startup

For Start, type:
*/foosbyte-api/src $ sls offline start

## Useful Terminal Commands
    aws dynamodb list-tables --endpoint-url http://localhost:8000
    aws dynamodb describe-table --endpoint-url http://localhost:8000 --table-name player
    aws dynamodb scan --endpoint-url http://localhost:8000 --table-name player