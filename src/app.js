let response;

exports.hello = async (event, context) => {
  console.log('event: ', JSON.stringify(event, null, 2));
  console.log('context: ', JSON.stringify(context, null, 2));
  try {
    response = {
      'statusCode': 200,
      'body': JSON.stringify({
        message: 'hello',
      })
    }
  } catch (err) {
    console.log(err);
    return err;
  }

  return response
};

exports.world = async (event, context) => {
  console.log('event: ', JSON.stringify(event, null, 2));
  console.log('context: ', JSON.stringify(context, null, 2));
  try {
    response = {
      'statusCode': 200,
      'body': JSON.stringify({
        message: 'world',
      })
    }
  } catch (err) {
    console.log(err);
    return err;
  }

  return response
};
