import * as HttpStatus from 'http-status';
import * as redis from 'redis';

import NewsService from "../services/news_service";
import Helper from "../infra/helper";
import { textChangeRangeNewSpan } from 'typescript';

class NewsController{

  async get(req, res){
    let client = redis.createClient();

    client.on('connect', function() {
    });

    await client.connect();

    let news = await client.get("news")
                           .catch((err) => res.status(500).send(err))
    
    if(news){
      console.log('redis');
      Helper.send_response(res, HttpStatus.OK, news);
    }else{
      const news = await NewsService.get();
      client.set('news', JSON.stringify(news));
      client.expire('news', 2);
      console.log('db');
      Helper.send_response(res, HttpStatus.OK, news);
    }
  }

  async get_by_id(req, res){
    const news = await NewsService.get_by_id(req.params.id);
    Helper.send_response(res, HttpStatus.OK, news);
  }

  async create(req, res){
    await NewsService.create(req.body);
    Helper.send_response(res, HttpStatus.CREATED, "Notícia cadastrada com sucesso!");
  }

  async update(req, res){
    await NewsService.update(req.params.id, req.body);
    Helper.send_response(res, HttpStatus.CREATED, `Notícia foi atualizada com sucesso!`);
  }

  async delete(req, res){
    await NewsService.delete(req.params.id)
    Helper.send_response(res, HttpStatus.CREATED, "Notícia deletada com sucesso!");
  }

}

export default new NewsController();