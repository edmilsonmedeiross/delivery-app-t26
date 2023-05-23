import express, { Request, Response } from 'express';
import routers from './controller'

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

routers.forEach(({path, router}) => {
  app.use(path, router)
})

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
