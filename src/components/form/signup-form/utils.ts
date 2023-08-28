import * as Yup from 'yup'

export const initialValues = {
  name: '',
  email: '',
  password: '',
}

export const validationSchema = Yup.object({
  name: Yup.string().min(2, 'Minimum 2 letters to fill').required('Required field!'),
  email: Yup.string().email().required('Required field!'),
  password: Yup.string().min(6, 'Minimum 6 symbols to fill').required('Required field!'),
})
