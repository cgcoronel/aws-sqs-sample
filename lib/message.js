const config = require('../config');
const AWS = require('aws-sdk');
const { region } = config.aws;

//Define aws region
AWS.config.update({ region });
const SQS = new AWS.SQS();

/**
 * Delete a message from a sqs queue.
 * @param {string} url sqs url from amazon.
 * @param {string} receiptHandle sqs token message.
 * @returns {Promise}.
 */
const deleteMessage = (url, receiptHandle) => {
  const deleteParams = {
    QueueUrl: url,
    ReceiptHandle: receiptHandle,
  };

  return SQS.deleteMessage(deleteParams).promise();
};

/**
 * Publish a message into a sqs queue.
 * @param {string} url sqs url from amazon.
 * @param {object} headerData messa header.
 * @param {object} payload message body.
 * @param {number} delay delivery delay time.
 * @returns {Promise}.
 */
const publishMessage = (url, headerData, payload, delay = 0) => {
  const sqsMessage = {
    MessageAttributes: headerData,
    MessageBody: JSON.stringify(payload),
    QueueUrl: url,
    DelaySeconds: delay,
  };

  return SQS.sendMessage(sqsMessage).promise();
};

module.exports = {
  publishMessage,
  deleteMessage,
};
