const { buildSchema } = require('graphql');
import news_type from "./types/news_type";

const schema = buildSchema(news_type);

export default schema;