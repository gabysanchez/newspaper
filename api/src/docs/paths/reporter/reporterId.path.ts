import { addReporter, reporter } from '../../schemas/reporter.schema';

export const reporterIdPath = {
  get: {
    tags: ['reporter'],
    summary: 'Get Reporter',
    operationId: 'getReporter',
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'The ID of the reporter hosted in MYSQL.',
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
              $ref: '#/components/schemas/Reporter',
            },
          },
          'application/xml': {
            schema: {
              $ref: '#/components/schemas/Reporter',
            },
          },
        },
      },
      404: {
        description: 'ERROR: The reporter could not be found',
        content: {},
      },
    },
  },
  put: {
    tags: ['reporter'],
    summary: 'Updated reporter',
    description: 'Only for authorized reporters',
    operationId: 'updateReporter',
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
    requestBody: {
      description: 'Updated reporter object',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
              },
              birthDate: {
                type: 'date',
                pattern: '/([0-9]{4})-(?:[0-9]{2})-([0-9]{2})/',
                example: '2019-05-17',
              },
            },
          },
        },
      },
      required: true,
    },
    responses: {
      400: {
        description: 'Invalid user supplied',
        content: {},
      },
      404: {
        description: 'User not found',
        content: {},
      },
    },
    'x-codegen-request-body-name': 'body',
  },
  delete: {
    tags: ['reporter'],
    summary: 'Delete reporter',
    description: 'Only for authorized reporters',
    operationId: 'deleteReporter',
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
      404: {
        description: 'Reporter not found',
        content: {},
      },
    },
  },
};
