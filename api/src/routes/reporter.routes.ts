import express from 'express';

import * as routerReporter from '../controllers/reporter.controllers';
const router = express.Router();

router.get('/', routerReporter.getAll);
router.get('/:id', routerReporter.get);
router.post('/', routerReporter.add);
router.put('/:id', routerReporter.update);
router.delete('/:id', routerReporter.remove);

export { router };
