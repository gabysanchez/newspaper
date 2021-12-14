import { log } from 'console';
import { Request, Response } from 'express';
import { DAOFactory } from '../dao/DAOFactory';
import { News, NewsModel } from '../models/News';

const newsMongo = DAOFactory.getInstance().getNewsMongo();

const getAll = async (req: Request, res: Response) => {
  try {
    const data = await newsMongo.getAll();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};
const get = async (req: Request, res: Response) => {
  try {
    const data = await newsMongo.get(req.params.id);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};
const getReporter = async (req: Request, res: Response) => {
  try {
    const data = await newsMongo.getReporter(req.params.id);

    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};

const add = async (req: Request, res: Response) => {
  try {
    const data = await newsMongo.add(req.body);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};
const remove = async (req: Request, res: Response) => {
  try {
    await newsMongo.delete(req.params.id);
    res.status(200).send('ok');
  } catch (err) {}
};

export { getAll, get, add, getReporter, remove };
