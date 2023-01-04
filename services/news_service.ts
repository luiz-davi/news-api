import NewsRepository from "../repository/news_repository";

class NewService{

  get(){
    return NewsRepository.find({});
  }

  get_by_id(_id){    
    return NewsRepository.findById(_id);
  }

  create(news){
    return NewsRepository.create(news);
  }

  update(_id, news){
    return NewsRepository.findByIdAndUpdate(_id, news);
  }
  delete(_id){
    return NewsRepository.findByIdAndRemove(_id);
  }

}

export default new NewService();