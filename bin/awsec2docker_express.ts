#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { Awsec2dockerExpressStack } from '../lib/awsec2docker_express-stack';

const app = new cdk.App();
new Awsec2dockerExpressStack(app, 'Awsec2dockerExpressStack');
app.run();
