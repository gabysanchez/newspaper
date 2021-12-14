export const resource = {
  type: 'object',
  properties: {
    _id: {
      type: 'string',
    },
    url: {
      type: 'string',
      required: false,
    },
  },
  xml: {
    name: 'Resource',
  },
};
