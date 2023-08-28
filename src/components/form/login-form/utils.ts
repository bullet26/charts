import * as Yup from 'yup'

export const initialValues = {
  email: '',
  password: '',
}

export const validationSchema = Yup.object({
  email: Yup.string().email().required('Required field!'),
  password: Yup.string().min(6, 'Minimum 6 symbols to fill').required('Required field!'),
})
