const { createConsumer } = require('./consumer');

const { publishMessage, deleteMessage } = require('./message');

module.exports = {
  consumer: {
    createConsumer,
    deleteMessage,
  },
  producer: {
    publishMessage,
  },
};
