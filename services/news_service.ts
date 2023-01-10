import NewsRepository from "../repository/news_repository";

class NewService{

  async search(item, page, perPage){
    return await NewsRepository.find({
      title: new RegExp('.*' + item + '*.', 'i'),
    }, 'title hat img')
    .skip((page - 1) * perPage)
    .limit(perPage);
  }

  async get(){
    
    let start_date = new Date('2019-01-01');
    let end_date = new Date('2019-03-01');

    return await NewsRepository.find({
      active: true
    }, 'title hat publish_date img')
    .sort({ publish_date: -1 });
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