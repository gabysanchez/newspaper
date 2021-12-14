import { newsPath } from './paths/news/news.path';
import { newsIdPath } from './paths/news/newsID.path';
import { newsReporterId } from './paths/news/newsReporterId.path';
import { reporterPath } from './paths/reporter/reporter.path';
import { reporterIdPath } from './paths/reporter/reporterId.path';
import { news } from './schemas/news.schema';
import { reporter } from './schemas/reporter.schema';
import { resource } from './schemas/resource.schema';

const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    description:
      'News, reporters and resources management service, of the Newspaper application',
    version: '1.0.0',
    title: 'NEWSPAPER API',
    contact: {
      email: 'gsanchezrodrigo@gmail.com',
    },
    license: {
      name: 'ISC',
      url: 'https://opensource.org/licenses/ISC',
    },
  },
  host: 'localhost:8080',
  basePath: '/api/',
  tags: [
    {
      name: 'reporter',
      description: 'Operations about reporters',
      externalDocs: {
        description: 'Base address',
        url: 'http://localhost:8080/api/reporters',
      },
    },
    {
      name: 'news',
      description: 'Operations about news',
      externalDocs: {
        description: 'Base address',
        url: 'http://localhost:8080/api/news',
      },
    },
  ],
  servers: [
    {
      url: 'http://localhost:8080/api/',
    },
    {
      url: 'HTTPS',
    },
  ],
  paths: {
    '/news': newsPath,
    '/news/{_id}': newsIdPath,
    '/news/reporter/{id}': newsReporterId,
    '/reporters': reporterPath,
    '/reporters/{id}': reporterIdPath,
  },
  components: {
    schemas: {
      News: news,
      Reporter: reporter,
      Resource: resource,
    },
  },
};
export { swaggerDocument };
