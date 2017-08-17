import dynamodb from './dynamodb';

export interface ServerlessCallback {
  (error: Error | null, reponse?: any): void;
}

export function list(
  _event: any,
  _context: any,
  callback: ServerlessCallback
): void {
  const params = {
    TableName: 'player'
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
      body: JSON.stringify(result.Items)
    };
    callback(null, response);
  });
}
