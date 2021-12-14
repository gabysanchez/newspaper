import { reporter } from './reporter.schema';
import { resource } from './resource.schema';

export const news = {
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
    reporter: {
      required: false,
      type: 'array',
      items: reporter,
    },
    resource: {
      required: false,
      type: 'array',
      items: resource,
    },
  },
  xml: {
    name: 'News',
  },
};

export const addNews = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
    },
    text: {
      type: 'string',
    },
    reporter: {
      type: 'array',
      items: {
        type: 'number',
      },
    },
    resource: {
      type: 'array',
      items: {
        type: 'number',
      },
    },
  },
};
