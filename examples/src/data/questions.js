export const questions = [
  {
    code: 'name',
    label: 'Name',
    placeholder: 'John Doe',
    type: 'text',
    validationType: 'string',
    value: '',
    validations: [
      {
        type: 'required',
        params: ['name is required'],
      },
      {
        type: 'min',
        params: [5, "name can't be less than 5 characters"],
      },
      {
        type: 'max',
        params: [10, "name can't be more than 10 characters"],
      },
    ],
  },

  {
    code: 'name',
    label: 'Name',
    placeholder: 'John Doe',
    type: 'text',
    validationType: 'string',
    value: '',
    validations: [
      {
        type: 'required',
        params: ['name is required'],
      },
      {
        type: 'min',
        params: [5, "name can't be less than 5 characters"],
      },
      {
        type: 'max',
        params: [10, "name can't be more than 10 characters"],
      },
    ],
  },
  {
    code: 'name',
    label: 'Name',
    placeholder: 'John Doe',
    type: 'text',
    validationType: 'string',
    value: '',
    validations: [
      {
        type: 'required',
        params: ['name is required'],
      },
      {
        type: 'min',
        params: [5, "name can't be less than 5 characters"],
      },
      {
        type: 'max',
        params: [10, "name can't be more than 10 characters"],
      },
    ],
  },

  {
    code: 'Q2',
    placeholder: '',
    type: 'radio',
    validationType: 'string',
    value: '',
    options: ['Yes', 'No'],
    validations: [
      {
        type: 'required',
        params: ['Q2 is required'],
      },
    ],
  },

  {
    code: 'Q1',
    placeholder: '',
    type: 'radio',
    validationType: 'string',
    value: '',
    options: ['Yes', 'No'],
    validations: [
      {
        type: 'required',
        params: ['Q1 is required'],
      },
    ],
  },
];
