import express from 'express';

import * as routersNews from '../controllers/news.controllers';
const router = express.Router();

router.get('/', routersNews.getAll);
router.get('/:id', routersNews.get);
router.get('/reporter/:id', routersNews.getReporter);
router.post('/', routersNews.add);
router.delete('/:id', routersNews.remove);

export { router };
