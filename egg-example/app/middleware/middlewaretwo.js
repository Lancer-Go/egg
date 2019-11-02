// eslint-disable-next-line strict,no-unused-vars
module.exports = (options, app) => {
  return async function middlewaretwo(ctx, next) {
    await next();
    console.log('middle two run');
  };
};
