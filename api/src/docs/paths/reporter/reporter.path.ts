import { addReporter, reporter } from '../../schemas/reporter.schema';

export const reporterPath = {
  get: {
    tags: ['reporter'],
    summary: 'Get all Reporter',
    operationId: 'getAllReporter',
    responses: {
      200: {
        description: 'successful operation',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: reporter,
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
    tags: ['reporter'],
    summary: 'Create Reporter',
    description: 'Only for admins',
    operationId: 'addReporter',
    requestBody: {
      description: 'Created news object',
      content: {
        'application/json': {
          schema: addReporter,
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
