import * as expres from 'express';
import NewsController from '../controllers/news_controller';
import Uploads from '../infra/uploads';
import Auth from '../infra/auth';



const router = expres.Router();

router.route('/').get((req, res) => {
  return res.status(200).json({ ok: true });
});

router.route('/uploads').post(Uploads.single('file'), (req, res) =>  {
  try {
    res.status(200).json({
      message: 'arquivo enviado com sucesso!'
    });
  } catch (error) {
    console.log(error);
    
  }
})

//router.use(Auth.validate);
router.route('/api/v1/news').get(NewsController.get);
router.route('/api/v1/news').get(NewsController.get);
router.route('/api/v1/news/export/tocsv').get(NewsController.export_to_csv);
router.route('/api/v1/news').post(NewsController.create);
router.route('/api/v1/news/:id').put(NewsController.update);
router.route('/api/v1/news/:id').delete(NewsController.delete);

export default router;