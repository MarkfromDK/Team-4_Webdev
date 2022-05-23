module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AKIAYZM5YQAPXFEN3RMP"),
        secretAccessKey: env("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"),
        region: env("eu-north-1"),
        params: {
          Bucket: env("t4-projekt-bucket"),
        },
      },
    },
  },
  // ...
});
