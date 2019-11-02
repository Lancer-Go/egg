'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // eslint-disable-next-line no-unused-vars
  const middlewareone = app.middleware.middlewareone();
  const middlewaretwo = app.middleware.middlewaretwo();
  // eslint-disable-next-line no-unused-vars
  const { router, controller } = app;
  router.get('/', middlewareone, app.controller.home.index);
  router.post('/form', middlewaretwo, app.controller.home.answer);
};
