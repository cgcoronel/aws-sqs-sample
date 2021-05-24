const config = {
  aws: {
    region: process.env.AWS_REGION,
  },
  sqs: {
    url: process.env.SQS_URL,
  },
};

module.exports = {
  ...config,
};
