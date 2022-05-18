/* eslint-disable import/no-absolute-path */
import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/style.scss';
import './view/components';
import App from './view/app';
import { swRegister, getElement } from './helper';

const app = new App({
  appBar: getElement('app-bar'),
  contentContainer: getElement('#content'),
});

window.addEventListener('load', () => {
  app.renderContent();
  swRegister();
});

window.addEventListener('hashchange', () => {
  app.renderContent();
});
