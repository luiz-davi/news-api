import * as json2csv from 'json2csv';
import * as uuid from 'uuid';
import * as fs from 'fs'; // fs é uma biblioteca padrão do Node.Js que possibilita a escrita de arquivos


const fields = [
  '_id', 'hat', 'title', 'text', 'author',
  'img', 'publish_date', 'link', 'active'
]

const opts = {fields};

class ExportFiles{

  tocsv = (news) => {
    try {
      const csv = json2csv.parse(news, opts);
      const filename = uuid.v4() + '.csv';

      fs.writeFile(`./exports/${filename}`, csv, (err) => {
        if(err) throw err;

        console.log('Arquivo salvo com sucesso!');
      } );

      return filename;
    } catch (error) {
      console.log(error);
    }
  }

}

export default new ExportFiles();