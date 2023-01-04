class Helper{
  send_response = (res, status_code, data) =>{
    return res.status(status_code).json({ result: data });
  }
}

export default new Helper();