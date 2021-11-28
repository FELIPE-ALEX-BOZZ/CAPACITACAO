import express, {Request, Response, NextFunction} from 'express';

const app = express(); // a ) instancio a aplicação

//a partir daqui vamos utilizar o seguinte resolve para configura-la
app.get('/status',(req: Request,res: Response,next: NextFunction)=>{ 
    res.status(200).send({foo: 'Sucesso total esse cara é demais'});
});
//também é necessário escutar a porta
app.listen(3000,()=>{
    console.log('app executando na porta 3000');
});

// 1 console.log('Felipe bozz');
