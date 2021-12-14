import express from 'express';

import * as routersViews from '../controllers/views.controllers';
const router = express.Router();

router.get('/', routersViews.getAll);
router.get('/:id', routersViews.getReporter);

export { router };
