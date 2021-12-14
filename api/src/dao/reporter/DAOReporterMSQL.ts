import { log } from 'console';
import { Request, Response } from 'express';
import { connection } from '../../db/mysql';
import { News, NewsModel } from '../../models/News';
import { Reporter } from '../../models/Reporter';
import { DAOReporter } from './DAOReporter';

export class DAOReporterMSQL
  implements DAOReporter<Promise<Reporter>, Promise<Reporter[]>>
{
  constructor() {}
  delete(id: String): Promise<Reporter> {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM reporters WHERE id = ${id};`;
      connection.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          NewsModel.updateMany(
            {},
            { $pull: { reporter: { id: id } } },
            (err: any, data: any) => {
              if (err) {
                reject(err);
              } else {
                resolve(result);
              }
            }
          );
        }
      });
    });
  }

  update(id: String, data: any): Promise<Reporter> {
    return new Promise((resolve, reject) => {
      const sql = `UPDATE reporters SET name='${data.name}', birthDate ='${data.birthDate}' WHERE id = ${id};`;
      connection.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          NewsModel.updateMany(
            { 'reporter.id': id },
            { 'reporter.$.name': data.name },
            (err: any, data: any) => {
              if (err) {
                reject(err);
              } else {
                resolve(result);
              }
            }
          );
        }
      });
    });
  }
  add(data: any): any {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO reporters (name, birthDate) VALUES ('${data.name}', '${data.birthDate}');`;
      connection.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
  get(id: String): Promise<Reporter> {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM reporters WHERE id = ${id};`;
      connection.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          const { id, name, birthDate } = result[0];
          NewsModel.find({ 'reporter.id': id }, (err, data: any) => {
            if (err) {
            } else {
              const arrNews: News[] = [];
              data.forEach((row: any) => {
                const { _id, title, text } = row;
                const news = new News(_id, title, text);
                arrNews.push(news);
              });
              const reporter = new Reporter(id, name, birthDate, arrNews);
              resolve(reporter);
            }
          });
        }
      });
    });
  }

  getAll(): Promise<Reporter[]> {
    return new Promise((resolve, reject) => {
      connection.query('select * from reporters', (err, rows) => {
        if (err) {
          reject(err);
        } else {
          let reporterList = [];
          for (let i = 0; i < rows.length; i++) {
            const { id, name } = rows[i];
            const reporter = new Reporter(id, name);
            reporterList.push(reporter);
          }
          resolve(reporterList);
        }
      });
    });
  }
}
