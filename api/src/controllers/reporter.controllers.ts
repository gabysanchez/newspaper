import { Request, Response } from 'express';
import { connection } from '../db/mysql';
import { Reporter } from '../models/Reporter';

import { DAOFactory } from '../dao/DAOFactory';

const reporterMSQL = DAOFactory.getInstance().getReporterMSQL();

const getAll = async (req: Request, res: Response) => {
  try {
    const data = await reporterMSQL.getAll();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};

const get = async (req: Request, res: Response) => {
  try {
    const data = await reporterMSQL.get(req.params.id);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};

const add = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    await reporterMSQL.add(data);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};

const update = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;
  try {
    await reporterMSQL.update(id, data);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const data = await reporterMSQL.delete(req.params.id);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};
export { getAll, add, get, update, remove };
