// eslint-disable-next-line strict,no-unused-vars
module.exports = (options, app) => {
  return async function middlewareone(ctx, next) {
    await next();
    console.log('middle 1 run');
  };
};
