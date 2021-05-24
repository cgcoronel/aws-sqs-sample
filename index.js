const { sqs } = require('./config');

const { consumer } = require('./lib');

const onMessage = async (msg) => {
  const { ReceiptHandle } = msg;

  try {
    console.log('show message:', msg);
  } catch (error) {
    console.log(error);
  } finally {
    await consumer.deleteMessage(sqs.url, ReceiptHandle);
  }
};

//Get sqs-consumer instance.
const app = consumer.createConsumer(sqs.url, onMessage);

const onStart = () => {
  console.log('waiting messages...');

  app.start();
};

onStart();
