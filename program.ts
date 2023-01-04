import StartUp from './start_up';

let port = process.env.PORT || 3050;

StartUp.app.listen(port, () => console.log(`Servidor rodando na porta ${port}...`));