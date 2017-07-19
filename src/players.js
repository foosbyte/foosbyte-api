import dynamodb from './dynamodb';

export function list(event, context, callback) {
  const params = {
    TableName: 'player',
  };

  // fetch all player from the database
  dynamodb.scan(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(new Error("Couldn't fetch players."));
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
    callback(null, response);
  });
}
