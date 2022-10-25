import { Field, Form, Formik } from 'formik';
import React from 'react';
import InputMask from 'react-input-mask';
import * as Yup from 'yup';

interface SubmitFormProps {
  inputTheme: string;
  errorTheme: string;
  headingTheme: string;
}

const SubmitForm: React.FC<SubmitFormProps> = ({
  inputTheme,
  errorTheme,
  headingTheme,
}) => {
  const [submitButton, setSubmitButton] = React.useState(false);

  const enableButton = React.useCallback(() => setSubmitButton(true), []);

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Имя должно быть больше 2х символов!')
      .max(50, 'Имя не должно превышать длину в 50 символов!')
      .required('Поле обязательно к заполнению'),
    phone: Yup.string()

      .test(
        'phone-len',
        'Номер телефона должен содержать не меньше 6 символов!',
        (val = '') => {
          // console.log(val.replace(/-|\(|\)|_|\+|\s/g,"").length);
          return val.replace(/-|\(|\)|_|\+|\s/g, '').length > 6;
        }
      )
      .required('Поле обязательно к заполнению'),
    tos: Yup.boolean().oneOf(
      [true],
      'Вам необходимо принять условия для получения обратной связи'
    ),
  });

  return (
    <div className=''>
      <div>
        <div className={headingTheme}>Оставить контакты для обратной связи</div>
      </div>

      <div className='h-128 relative flex w-full flex-col items-center '>
        <div className='md:w-128  absolute  z-20  flex h-full items-center'>
          <Formik
            initialValues={{
              name: '',
              phone: '',
              tos: false,
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              setTimeout(() => {
                setSubmitButton(false);
              }, 3000);
              setSubmitButton(true);
            }}
          >
            {({ errors, values, touched, handleChange }) => (
              <Form className='   md:w-128 px-6'>
                <div className={inputTheme}>Введите имя</div>

                <div className=' my-6'>
                  <div className=''>
                    <Field className='input-field' name='name' />
                    {errors.name && touched.name ? (
                      <div className={errorTheme}>{errors.name}</div>
                    ) : null}
                  </div>
                </div>
                <div className={inputTheme}>Номер телефона</div>
                <div className=' my-6'>
                  <div className=''>
                    <InputMask
                      mask='+9 (999) 999-99-99'
                      id='phone'
                      value={values.phone}
                      onChange={handleChange}
                    ></InputMask>
                    {errors.phone && touched.phone ? (
                      <div className={errorTheme}>{errors.phone}</div>
                    ) : null}
                  </div>
                </div>

                <div className=''>
                  <div className=''>
                    <button
                      className='btn-form  '
                      type='submit'
                      disabled={submitButton}
                    >
                      Отправить данные
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <img
          src='https://image.architonic.com/prj2-3/20072540/ad-architecture-urban-apartment-renovation-architonic-002-01-arcit18.jpg'
          className=' h-full w-full object-cover mix-blend-overlay'
        />
      </div>
    </div>
  );
};

export default SubmitForm;
