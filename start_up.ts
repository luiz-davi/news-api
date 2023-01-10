import * as express from 'express';
import * as BodyParser from 'body-parser';
import * as cors from 'cors';
import * as compression from 'compression';

import mongoose from 'mongoose';
import news_router from './router/news_router';
class StartUp {
  public app: express.Application;

  constructor() {
    this.app = express();

    mongoose.set('strictQuery', false);
    mongoose.connect("mongodb+srv://ravengar:ravengar@cluster0.5bagg4g.mongodb.net/news_api?retryWrites=true&w=majority");

    this.middleware();
    this.routes();
  }

  enable_cors(){
    const options: cors.CorsOptions = {
      methods: 'GET, OPTIONS, PUT, POST, DELETE',
      origin: '*'
    }
    
    this.app.use(cors(options));
  }

  middleware(){
    this.enable_cors();
    this.app.use(BodyParser.json());
    this.app.use(BodyParser.urlencoded({ extended: false }));
    this.app.use(compression());
    this.app.use('/exports', express.static(process.cwd() + 'exports'));
  }

  routes(){
    this.app.use(news_router);
  }
}

export default new StartUp();