import Application from 'udaci-meals/app';
import config from 'udaci-meals/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
