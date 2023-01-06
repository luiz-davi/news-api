import NewsRepository from "../repository/news_repository";

class NewService{

  async get(){
    return await NewsRepository.find({});
  }

  async get_by_id(_id){
    return await NewsRepository.findById(_id);
  }

  async create(news){
    return await NewsRepository.create(news);
  }

  async update(_id, news){
    return await NewsRepository.findByIdAndUpdate(_id, news);
  }
  async delete(_id){
    return await NewsRepository.findByIdAndRemove(_id);
  }

}

export default new NewService();