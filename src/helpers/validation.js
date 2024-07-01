import * as yup from 'yup';

const usernameRegexp =
  /^(?:\s*[a-zA-Z'-]{1,32}(?:\s+[a-zA-Z'-]{1,32})?|\s*[a-zA-Z'-]{1,64})\s*$/;
const emailRegexp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const phoneRegexp = /^\+380\d{2}\d{3}\d{2}\d{2}$/;

export const schema = yup.object().shape({
  username: yup
    .string()
    .required('Fullname is required')
    .min(3, 'Minimum 3 characters')
    .max(32, 'Maximum 32 characters')
    .matches(usernameRegexp, 'Wrong Full name'),
  email: yup
    .string()
    .required('Email is required')
    .matches(emailRegexp, 'Wrong Email'),
  phone: yup
    .string()
    .required('Phone is required')
    .matches(phoneRegexp, 'Wrong Phone'),
  message: yup.string().max(500, 'Maximum 500 characters'),
});

export default schema;
