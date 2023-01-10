export default `
scalar Date

type Query{
  news_list: [News]
  news_by_id(id: String): News
}

type Mutation{
  add_news(input: NewsInput): News
  update_news(id: String, input: NewsInput): News
  delete_news(id: String): String
}

type News{
  _id: String,
  hat: String,
  title: String,
  text: String,
  author: String,
  img: String,
  publish_date: Date,
  link: String,
  active: Boolean
}

input NewsInput{
  _id: String,
  hat: String,
  title: String,
  text: String,
  author: String,
  img: String,
  publish_date: Date,
  link: String,
  active: Boolean
}
`