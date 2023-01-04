import * as express from 'express';
import * as BodyParser from 'body-parser';
import * as cors from 'cors';
import NewsController from './controllers/news_controller';
import mongoose from 'mongoose';
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
  }

  routes(){
    this.app.route('/').get((req, res) => {
      return res.status(200).json({ ok: true });
    });

    this.app.route('/api/v1/news').get(NewsController.get);
    this.app.route('/api/v1/news/:id').get(NewsController.get_by_id);
    this.app.route('/api/v1/news').post(NewsController.create);
    this.app.route('/api/v1/news/:id').put(NewsController.update);
    this.app.route('/api/v1/news/:id').delete(NewsController.delete);

  }
}

export default new StartUp();