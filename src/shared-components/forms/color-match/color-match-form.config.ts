const DemographicsStep = {
  name: {
    type: 'text',
    validations: {
      required: true
    },
    errors: {
      required: 'This field can not be left blank'
    },
    label: '',
    placeholder: 'Full Name'
  },
  email: {
    type: 'email',
    validations: {
      required: true,
      email: true
    },
    errors: {
      required: 'This field can not be left blank',
      email: 'Please enter a valid email address'
    },
    label: '',
    placeholder: 'Email Address'
  },
  phone: {
    type: 'phone',
    validations: {
      required: true,
      pattern: '^\\(?([2-9][0-8][0-9])\\)?[-.*]?([2-9][0-9]{2})[-.*]?([0-9]{4})$'
    },
    errors: {
      required: 'This field can not be left blank',
      pattern: 'Please enter a valid phone number'
    },
    label: '',
    placeholder: 'Phone Number'
  }
};
const CurrentRoutineStep = {
  currentMakeup: {
    type: 'textarea',
    validations: {},
    errors: {},
    label: 'What makeup do you currently use?',
    placeholder: ''
  },
  makeupStruggle: {
    type: 'textarea',
    validations: {},
    errors: {},
    label: 'What is your biggest makeup struggle?',
    placeholder: ''
  },
  skinType: {
    type: 'radio',
    name: 'skinType',
    values: ['Oily', 'Dry', 'Normal'],
    validations: {},
    errors: {},
    label: 'What is your skin type?',
    placeholder: ''
  },
  skinCareSatisfied: {
    type: 'radio',
    name: 'skinCare',
    values: ['Yes', 'No', 'Yes, but open to new options'],
    validations: {},
    errors: {},
    label: 'Are you satisfied with your current skin care routine?',
    placeholder: ''
  },
};
const PhotoStep = {
  photoFace: {
    type: 'file',
    validations: {},
    errors: {},
    label: 'Upload a photo of you',
    placeholder: ''
  },
};

const FormSteps = [
  { label: 'Step 1 of 2', data: DemographicsStep },
  { label: 'Step 2 of 2', data: CurrentRoutineStep }
];

export { FormSteps };
