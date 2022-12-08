const DoctorFields = [
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
    label: "Address",
    type: "text",
    placeholder: "Address",
    id: "address",
  },
  {
    label: "DepartmentID",
    type: "tel",
    placeholder: "DepartmentID",
    pattern: "[0-9]{1}",
    id: "departmentId",
  },
  {
    label: "SpecializationID",
    type: "tel",
    placeholder: "SpecializationID",
    pattern: "[0-9]{1}",
    id: "specId",
  },
  {
    label: "Experience (in years)",
    type: "tel",
    placeholder: "Experience",
    pattern: "[0-9]{1,2}",
    id: "experience",
  },
  {
    label: "Category",
    type: "text",
    placeholder: "Category",
    id: "category",
  },
  {
    label: "Price of the Appointment",
    type: "number",
    placeholder: "Price",
    pattern: "[0-9]{1,5}",
    id: "price",
  },
  {
    label: "Degree/Education",
    type: "text",
    placeholder: "Degree/Education",
    id: "degree",
  },
  {
    label: "Photo of the Doctor",
    type: "file",
    placeholder: "Photo",
    id: "photo",
  },
  {
    label: "Homepage URL",
    type: "url",
    placeholder: "Homepage URL",
    id: "homepage",
  },
  {
    label: "Rating",
    type: "number",
    placeholder: "Rating",
    pattern: "[0-9]{1,2}",
    id: "rating",
  },
  {
    label: "Password",
    type: "password",
    placeholder: "Password",
    id: "password",
  },
  {
    label: "email",
    type: "email",
    placeholder: "email",
    id: "email",
  },
];

export default DoctorFields;