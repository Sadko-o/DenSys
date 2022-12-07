const PatientFields = [
  {
    label: "Name",
    type: "text",
    placeholder: "Name",
    id: "name",
  },
  {
    label: "Surname",
    type: "text",
    placeholder: "Surname",
    id: "surname",
  },
  {
    label: "Date of Birth",
    type: "date",
    placeholder: "Date of Birth",
    id: "dateOfBirth",
  },
  {
    label: "IIN",
    type: "tel",
    placeholder: "xxxxxxxxxxxx",
    pattern: "[0-9]{12}",
    id: "iin",
  },
  {
    label: "Blood type",
    type: "select",
    placeholder: "Blood type",
    id: "blood",
    options: [
      {
        value: "A+",
        label: "A+",
      },
      {
        value: "A-",
        label: "A-",
      },
      {
        value: "B+",
        label: "B+",
      },
      {
        value: "B-",
        label: "B-",
      },
      {
        value: "AB+",
        label: "AB+",
      },
      {
        value: "AB-",
        label: "AB-",
      },
      {
        value: "O+",
        label: "O+",
      },
      {
        value: "O-",
        label: "O-",
      },
    ],
  },
  {
    label: "ID",
    type: "tel",
    placeholder: "xxxxxxxxx",
    pattern: "[0-9]{9}",
    id: "id",
  },
  {
    label: "Contact Number",
    type: "tel",
    placeholder: "xxxxxxxxxx",
    pattern: "[0-9]{10}",
    id: "contact",
  },
  {
    label: "Emergency Contact Number",
    type: "tel",
    placeholder: "xxxxxxxxxx",
    pattern: "[0-9]{10}",
    id: "emergencyContact",
  },
  {
    label: "Email",
    type: "email",
    placeholder: "Email",
    id: "email",
  },
  {
    label: "Address",
    type: "text",
    placeholder: "Address",
    id: "address",
  },
  {
    label: "Marital Status",
    type: "select",
    placeholder: "Marital Status",
    id: "martialStatus",
    options: [
      {
        value: "Not Specified",
        label: "Not Specified",
      },
      {
        value: "Single",
        label: "Single",
      },
      {
        value: "Married",
        label: "Married",
      },
      {
        value: "Divorced",
        label: "Divorced",
      },
      {
        value: "Widowed",
        label: "Widowed",
      },
    ],
  },
  {
    label: "Registration Date",
    type: "date",
    placeholder: "Registration Date",
    id: "registrationDate",
  },
  {
    label: "Password",
    type: "password",
    placeholder: "Password",
    id: "password",
  },
];
export default PatientFields;
