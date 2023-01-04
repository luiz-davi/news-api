import NewsService from "../services/news_service";
import * as HttpStatus from 'http-status';
import Helper from "../infra/helper";

class NewsController{

  get(req, res){
    console.log("im here moda foca");
    
    NewsService.get()
      .then(news => Helper.send_response(res, HttpStatus.OK, news))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  get_by_id(req, res){
    NewsService.get_by_id(req.params.id)
      .then(news => Helper.send_response(res, HttpStatus.OK, news))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  create(req, res){
    NewsService.create(req.body)
      .then(news => Helper.send_response(res, HttpStatus.CREATED, "Notícia cadastrada com sucesso!"))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  update(req, res){
    NewsService.update(req.params.id, req.body)
      .then(news => Helper.send_response(res, HttpStatus.CREATED, `${news.title} foi atualizada com sucesso!`))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  delete(req, res){
    NewsService.delete(req.params.id)
      .then(() => Helper.send_response(res, HttpStatus.CREATED, "Notícia deletada com sucesso!"))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

}

export default new NewsController();