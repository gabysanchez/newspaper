import { Request, Response } from 'express';
import { DAOFactory } from '../dao/DAOFactory';

const newsMongo = DAOFactory.getInstance().getNewsMongo();

const getAll = async (req: Request, res: Response) => {
  try {
    const data = await newsMongo.getAll();
    res.status(200).render('news', { data: data });
  } catch (err) {
    res.status(500).send(err);
  }
};

const getReporter = async (req: Request, res: Response) => {
  try {
    const data = await newsMongo.getReporter(req.params.id);
    res.status(200).render('newsReporter', { data: data });
  } catch (err) {
    res.status(500).send(err);
  }
};

export { getAll, getReporter };
