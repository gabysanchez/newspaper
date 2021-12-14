import { addNews, news } from '../../schemas/news.schema';

export const newsReporterId = {
  get: {
    tags: ['news'],
    summary: 'Get Reporter News',
    operationId: 'getReporterNews',
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'The ID of the news that is hosted in mongoDB.',
        required: true,
        schema: {
          type: 'number',
        },
      },
    ],
    responses: {
      200: {
        description: 'successful operation',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: news,
            },
          },
          'application/xml': {
            schema: {
              $ref: '#/components/schemas/News',
            },
          },
        },
      },
      404: {
        description: 'ERROR: The news could not be found',
        content: {},
      },
    },
  },
};
