const config = require('../config');
const AWS = require('aws-sdk');

const { Consumer } = require('sqs-consumer');

const { region } = config.aws;

//Set region.
AWS.config.update({ region });

/**
 * Create a new consumer handler.
 * @param {string} queueUrl sqs url from amazon.
 * @param {object} onMessage function.
 * @returns {sqs-consumer app}.
 */
const createConsumer = (queueUrl, onMessage) => {
  return Consumer.create({
    queueUrl,
    handleMessage: onMessage,
    batchSize: 1,
    attributeNames: ['All'],
    messageAttributeNames: ['All'],
    sqs: new AWS.SQS(),
  });
};

module.exports = {
  createConsumer,
};
