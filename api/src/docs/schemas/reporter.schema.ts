export const reporter = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    birthDate: {
      type: 'string',
      required: false,
    },
    news: {
      type: 'array',
      required: false,
      items: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
          },
          title: {
            type: 'string',
          },
          text: {
            type: 'string',
          },
        },
      },
    },
  },
  xml: {
    name: 'Reporter',
  },
};
export const addReporter = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    birthDate: {
      type: 'date',
      pattern: '/([0-9]{4})-(?:[0-9]{2})-([0-9]{2})/',
      example: '2019-05-17',
    },
  },
};
