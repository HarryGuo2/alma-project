export const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 1,
    },
    email: {
      type: 'string',
      format: 'email',
    },
    country: {
      type: 'string',
      enum: ['Mexico', 'Brazil', 'South Korea', 'Russia', 'France', 'Other'],
    },
    linkedin: {
      type: 'string',
      format: 'uri',
    },
    visaCategory: {
      type: 'string',
      enum: ['O-1', 'EB-1A', 'EB-2 NIW', "I don't know"],
    },
    message: {
      type: 'string',
    },
  },
  required: ['name', 'email', 'country', 'visaCategory'],
};

export const uiSchema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/name',
      label: 'Full Name',
    },
    {
      type: 'Control',
      scope: '#/properties/email',
      label: 'Email',
    },
    {
      type: 'Control',
      scope: '#/properties/country',
      label: 'Country of Citizenship',
    },
    {
      type: 'Control',
      scope: '#/properties/linkedin',
      label: 'LinkedIn / Personal Website URL',
    },
    {
      type: 'Control',
      scope: '#/properties/visaCategory',
      label: 'Visa categories of interest?',
      options: {
        format: 'radio',
      },
    },
    {
      type: 'Control',
      scope: '#/properties/message',
      label: 'How can we help you?',
      options: {
        multi: true,
        rows: 5,
      },
    },
  ],
}; 