# Max Aldunate - Professional Site

### Deployed Site
[Max Aldunate Pro](https://max.aldunate.pro)

> Completely serverless website  
> Completely elastic infraestructure for any load  
> High available, cost-efficient, fault-tolerant and scalable
> CI/CD  Continuous integration and delivery
> Global CDN
> Secure Connections Only  

### AWS Resources
- For CI/CD
  - [Code Pipeline](https://aws.amazon.com/codepipeline/)
  - [Code Deploy](https://aws.amazon.com/codedeploy)
  - [Lambda](https://aws.amazon.com/lambda) (upload-serverless-lambda.py)
- [CloudFront](https://aws.amazon.com/cloudfront) CDN
- [S3](https://aws.amazon.com/s3/) for static content
- [API Gateway](https://aws.amazon.com/api-gateway/) for API declared with swagger doc
- [DynamoDB](https://aws.amazon.com/dynamodb/) for NoSql database
- [CloudWatch](https://aws.amazon.com/cloudwatch/) for monitoring and alarms
- [SNS](https://aws.amazon.com/sns/) for alarms and deployment notifications
- [Certificate Manager](https://aws.amazon.com/certificate-manager/)

### Run locally
```bash
$ git clone https://github.com/escamarla/max-aldunate-pro.git
$ cd max-aldunate-pro
$ npm install

$ npm install -g local-web-server
$ ws

Serving at http://ThinkPadW520:8000, http://192.168.1.138:8000, http://192.168.5
6.1:8000, http://127.0.0.1:8000
```

### Javascript frameworks/libraries used
- Unpkg - [https://unpkg.com]
- ChauJs - [http://www.chaijs.com]
- Mocha - [https://mochajs.org]
- Jest - [https://facebook.github.io/jest]
- Webpack - [https://webpack.js.org]
- Font Awesome - [https://fontawesome.com]
### Packages
- [https://unpkg.com/babel-standalone@6.24.2/babel.js]
- [https://unpkg.com/chai@3.5.0/chai.js]
- [https://unpkg.com/mocha@3.4.2/mocha.js]
- [https://unpkg.com/mocha@3.4.2/mocha.css]

### Babel and React practices in one file
- practices/babel.html
- practices/react.html

Max Aldunate <maxaldunate@gmail.com>


### Pending Tasks

- Automate lambda function for deployment upload with bash
- improve this readme
- download js packages and put in my own cdn
- activate api gateway and read from dynamoDB

