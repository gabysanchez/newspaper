import { DAONews } from './news/DAONews';
import { DAONewsMongo } from './news/DAONewsMONGO';
import { DAOReporter } from './reporter/DAOReporter';
import { DAOReporterMSQL } from './reporter/DAOReporterMSQL';

export class DAOFactory {
  private static daoFactory: DAOFactory;
  private daoReporter: DAOReporter<any, any> | undefined;
  private daoNews: DAONews<any, any> | undefined;

  constructor() {}

  public static getInstance(): DAOFactory {
    if (DAOFactory.daoFactory == null) {
      DAOFactory.daoFactory = new DAOFactory();
    }
    return DAOFactory.daoFactory;
  }

  public getReporterMSQL(): DAOReporter<any, any> {
    if (this.daoReporter == null) {
      this.daoReporter = new DAOReporterMSQL();
    }
    return this.daoReporter;
  }
  public getNewsMongo(): DAONews<any, any> {
    if (this.daoNews == null) {
      this.daoNews = new DAONewsMongo();
    }
    return this.daoNews;
  }
}
