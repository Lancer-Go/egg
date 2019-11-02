'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('form.html');
  }
  async answer() {
    const { ctx } = this;
    ctx.body = `body: ${JSON.stringify(ctx.request.body)}`;
  }
}

module.exports = HomeController;
