import { addNews } from '../../schemas/news.schema';

export const newsIdPath = {
  get: {
    tags: ['news'],
    summary: 'Get News',
    operationId: 'getNews',
    parameters: [
      {
        name: '_id',
        in: 'path',
        description: 'The ID of the news that is hosted in mongoDB.',
        required: true,
        schema: {
          type: 'string',
        },
      },
    ],
    responses: {
      200: {
        description: 'successful operation',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/News',
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
  delete: {
    tags: ['news'],
    summary: 'Delete news',
    description: 'Only for authorized reporters',
    operationId: 'deleteNews',
    parameters: [
      {
        name: '_id',
        in: 'path',
        description: 'The ID of the news that is hosted in mongoDB.',
        required: true,
        schema: {
          type: 'string',
        },
      },
    ],
    responses: {
      404: {
        description: 'News not found',
        content: {},
      },
    },
  },
};
