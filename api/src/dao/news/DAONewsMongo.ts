import { log } from 'console';
import { connection } from '../../db/mysql';
import { News, NewsModel } from '../../models/News';
import { Reporter } from '../../models/Reporter';
import { Resource } from '../../models/Resource';
import { DAONews } from './DAONews';

export class DAONewsMongo implements DAONews<Promise<News>, Promise<News[]>> {
  delete(id: String): void {
    NewsModel.deleteOne({ _id: id }, (err: any, data: any) => {
      return data;
    });
  }
  getAll(): Promise<News[]> {
    return new Promise((resolve, reject) => {
      NewsModel.find({}, (err, data) => {
        if (err) {
          reject(err);
        } else {
          let newsList = [];
          for (let i = 0; i < data.length; i++) {
            const { _id, title } = data[i];
            const news = new News(_id, title);
            newsList.push(news);
          }
          resolve(newsList);
        }
      });
    });
  }
  get(id: String): Promise<News> {
    return new Promise((resolve, reject) => {
      NewsModel.findOne({ _id: id }).exec((err, data: any) => {
        if (err) {
          reject(err);
        } else {
          const { _id, title, text, reporter, resource } = data;
          const arrReporters: Reporter[] = [];
          reporter.forEach((colum: any) => {
            const reporterObjet = new Reporter(colum.id, colum.name);
            arrReporters.push(reporterObjet);
          });
          const arrIdResources: number[] = [];
          resource.forEach((colum: any) => {
            arrIdResources.push(colum.id);
          });
          const sql = `SELECT id,url FROM resources WHERE id IN (${arrIdResources});`;
          connection.query(sql, (err, rows) => {
            if (err) {
              reject(err);
            } else {
              const arrResources: Resource[] = [];
              rows.forEach((colum: any) => {
                const resourceObjet = new Resource(colum.id, colum.url);
                arrResources.push(resourceObjet);
              });
              const news = new News(
                _id,
                title,
                text,
                arrReporters,
                arrResources
              );
              resolve(news);
            }
          });
        }
      });
    });
  }
  getReporter(id: any): Promise<News[]> {
    return new Promise((resolve, reject) => {
      NewsModel.find({ 'reporter.id': id }).exec((err, data: any) => {
        if (err) {
          reject(err);
        } else {
          const check = new Promise<News[]>(async (resolve, reject) => {
            const arrNews: News[] = [];
            for (let i = 0; i < data.length; i++) {
              await this.get(data[i].id).then((news) => {
                arrNews.push(news);
              });
            }
            resolve(arrNews);
          });
          check.then((arrNews) => {
            resolve(arrNews);
          });
        }
      });
    });
  }
  add(data: any): Promise<News> {
    return new Promise((resolve, reject) => {
      const sqlReporter = `SELECT id,name FROM reporters WHERE id IN (${data.reporter});`;
      connection.query(sqlReporter, (err, rowsReporter) => {
        if (err) {
          reject(err);
        } else {
          if (rowsReporter.length == data.reporter.length) {
            const reporters: Reporter[] = [];
            //Aqui me di cuenta que esto no valia para nada, me quiero morir, a quien le importe. ==>
            rowsReporter.forEach((colum: any) => {
              const reporter = new Reporter(colum.id, colum.name);
              reporters.push(reporter);
            });

            const sqlResource = `SELECT id FROM resources WHERE id IN (${data.resource});`;
            connection.query(sqlResource, (err, rowsResource) => {
              if (err) {
                reject(err);
              } else {
                if (rowsResource.length == data.resource.length) {
                  const resources: Resource[] = [];
                  rowsResource.forEach((colum: any) => {
                    const resource = new Resource(colum.id);
                    resources.push(resource);
                  });
                  const news = new News(
                    undefined,
                    data.title,
                    data.text,
                    reporters,
                    resources
                  );
                  const newsCreate = new NewsModel({
                    title: news.getTitle(),
                    text: news.getText(),
                    reporter: reporters,
                    resource: resources,
                  });
                  newsCreate.save((err, data) => {
                    if (err) {
                      reject(err);
                    } else {
                      resolve(news);
                    }
                  });
                } else {
                  reject('ERROR: Data no found');
                }
              }
            });
          } else {
            reject('ERROR: Data no found');
          }
        }
      });
    });
  }
}
