import { addNews } from '../../schemas/news.schema';

export const newsPath = {
  get: {
    tags: ['news'],
    summary: 'Get all News',
    operationId: 'getAllNews',
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
  post: {
    tags: ['news'],
    summary: 'Create News',
    description: 'Only for reporters',
    operationId: 'addNews',
    requestBody: {
      description: 'Created news object',
      content: {
        'application/json': {
          schema: addNews,
        },
      },
      required: true,
    },
    responses: {
      default: {
        description: 'successful operation',
        content: {},
      },
    },
    'x-codegen-request-body-name': 'body',
  },
};
