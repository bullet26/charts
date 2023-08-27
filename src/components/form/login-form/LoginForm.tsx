import { FC } from 'react'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import { Input, Button } from 'UI'

const LoginForm: FC = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        surname: '',
        age: 0,
        address: '',
        phone: '',
        terms: false,
      }}
      validationSchema={Yup.object({
        name: Yup.string().min(2, 'Minimum 2 letters to fill').required('Required field!'),
        surname: Yup.string().min(2, 'Minimum 2 letters to fill').required('Required field!'),
        age: Yup.number().positive('Age must be a positive').required('Age is required'),
        address: Yup.string().required('Address is required').min(10, 'Minimum 10 letters to fill'),
        delivery: Yup.string().required('Required field!'),
        payment: Yup.string().required('Required field!'),
        phone: Yup.string()
          .required('Enter your mobile phone number')
          .min(10, 'Minimum 10 numbers to fill'),
        terms: Yup.boolean().required('You have to agree').oneOf([true], 'You have to agree'),
      })}
      onSubmit={(values, { resetForm }) => {
        setСustomerInfo(values)
        console.log(JSON.stringify(values, null, 2))
        resetForm()
        navigate('/shop/result')
      }}>
      {(props: FormikProps<CustomerInfo>) => (
        <div className={s.wrapper}>
          <Form className={s.form}>
            <h2>Checkout</h2>
            <div className={s.price}>Total price - {totalPrice} $</div>
            <MyInput label="Your name" id="name" name="name" type="text" />
            <MyInput label="Your surname" id="surname" name="surname" type="text" />
            <MyInput label="Your age" id="age" name="age" type="number" />
            <MyInput label="Delivery address" id="address" name="address" type="text" />

            <button className={s.submit} type="submit">
              CHECKOUT
            </button>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default LoginForm
