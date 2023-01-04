import * as mongoose from 'mongoose';
import NewsSchema from '../models/news_schema';

export default mongoose.model('news', NewsSchema);