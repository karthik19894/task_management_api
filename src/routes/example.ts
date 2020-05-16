import { Router } from 'express';
const exampleRouter = Router();

exampleRouter.get('/', (req, res) => {
    res.send('Example Route Works!!!');
});

export default exampleRouter;
