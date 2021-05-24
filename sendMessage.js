const config = require('./config');
const AWS = require('aws-sdk');

const { region } = config.aws;
const { producer } = require('./lib');

//Set region.
AWS.config.update({ region });

AWS.config.update({
  region: 'us-east-1',
});

const send = async () => {
  const res = await producer.publishMessage(
    config.sqs.url,
    {
      type: {
        DataType: 'String',
        StringValue: 'message',
      },
    },
    { message: 'this is a message!' }
  );

  console.log('Sent result', res);
};

send()
  .then((a) => console.log('then', a))
  .catch((e) => console.error('error', e));
