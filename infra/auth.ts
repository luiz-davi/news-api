import { STATUS_CODES } from 'http';
import * as jwt from 'jsonwebtoken';
import Configs from './configs';

class Auth {

  validate(req, res, next){
    const token = req.headers['x-access-token'];
    
    if(!token){
      return res.status(401).json({ error: { message: "Não autorizado. Token necessário!" } });
    }

    jwt.verify(token, Configs.secret, (err, decodes) => {
      if(err){
        return res.status(401).json({ error: { message: "Token inválido." } });
      }

      return next();
    })
  }
}

export default new Auth();