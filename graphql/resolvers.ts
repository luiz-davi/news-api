import NewsService from "../services/news_service";

const resolvers = {
  news_list: async () => await NewsService.get(),
  news_by_id: async (args) => {
    return await NewsService.get_by_id(args.id);
  },
  add_news: async (args) => {
    return NewsService.create(args.input);
  },
  delete_news: async (args) => {
    return await NewsService.delete(args.id);
  },
  update_news: async (args) => {
    return await NewsService.update(args.input._id, args.input);
  }
};

export default resolvers;