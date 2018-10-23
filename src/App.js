import React, { Component } from "react";
import randomColor from "randomcolor";
import TagCloud from "react-tag-cloud";

const items = [
  { count: 65369, value: "amazon-web-services" },
  { count: 12701, value: "amazon-ec2" },
  { count: 12589, value: "amazon-s3" },
  { count: 5451, value: "aws-lambda" },
  { count: 4162, value: "amazon-elastic-beanstalk" },
  { count: 4114, value: "python" },
  { count: 3606, value: "java" },
  { count: 3595, value: "node.js" },
  { count: 3360, value: "php" },
  { count: 2961, value: "amazon-dynamodb" },
  { count: 2200, value: "aws-sdk" },
  { count: 2069, value: "amazon-cognito" },
  { count: 2003, value: "amazon-cloudformation" },
  { count: 1816, value: "aws-api-gateway" },
  { count: 1727, value: "javascript" },
  { count: 1691, value: "ruby-on-rails" },
  { count: 1680, value: "mysql" },
  { count: 1659, value: "amazon-rds" },
  { count: 1321, value: "docker" },
  { count: 1298, value: "amazon-1iam" },
  { count: 1296, value: "boto3" },
  { count: 1263, value: "android" },
  { count: 1248, value: "amazon-cloudfront" },
  { count: 1225, value: "amazon-emr" },
  { count: 1204, value: "ios" },
  { count: 1169, value: "aws-cli" },
  { count: 1120, value: "amazon" },
  { count: 1117, value: "amazon-elb" },
  { count: 1086, value: "c#" },
  { count: 1040, value: "django" },
  { count: 1038, value: "amazon-sqs" },
  { count: 1034, value: "linux" },
  { count: 1012, value: "amazon-sns" },
  { count: 994, value: "boto" },
  { count: 945, value: "amazon-cloudwatch" },
  { count: 927, value: "ruby" },
  { count: 884, value: "amazon-route53" },
  { count: 851, value: "amazon-redshift" },
  { count: 820, value: "nginx" },
  { count: 807, value: "ssl" },
  { count: 792, value: "ssh" },
  { count: 785, value: "lambda" },
  { count: 769, value: "dns" },
  { count: 727, value: "amazon-ecs" },
  { count: 679, value: "apache" },
  { count: 677, value: "postgresql" },
  { count: 663, value: "ubuntu" },
  { count: 663, value: "hadoop" },
  { count: 642, value: "json" },
  { count: 636, value: "terraform" }
];

const min = items.reduce(
  (min, p) => (p.count < min ? p.count : min),
  items[0].count
);

const max = items.reduce(
  (max, p) => (p.count > max ? p.count : max),
  items[0].count
);

class App extends Component {
  render() {
    return (
      <div className="app-outer">
        <div className="app-inner">
          <h1>react-tag-cloud demo</h1>
          <TagCloud
            style={{
              fontFamily: "sans-serif",
              fontWeight: "bold",
              fontSize: () => {
                console.log(this);
              },
              fontStyle: "italic",
              color: () =>
                randomColor({
                  hue: "blue"
                }),
              padding: 5,
              width: "100%",
              height: "100%"
            }}
          >
            {items.map(item => (
              <div>{item.value}</div>
            ))}
          </TagCloud>
        </div>
      </div>
    );
  }
}

export default App;
