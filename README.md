# aws-api-gateway-file-upload-service
AWS API Gateway based Service to accept file uploads

# Prerequisites
* [AWS CLI](https://aws.amazon.com/cli/)
* [SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)

# Setup
```
git clone https://github.com/sarthakj178/aws-api-gateway-file-upload-service.git aws-api-gateway-file-upload-service
cd aws-api-gateway-file-upload-service
npm install
```

# Run
```
sam local start-api
```

# Test
```
curl --request POST -H "Accept: image/png" -H "Content-Type: image/png" --data-binary @test.png   http://localhost:3000/upload
```
