import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import InputMask from 'react-input-mask';

const TestForm: React.FunctionComponent = () => {
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      company: '',
      phone: '',
    },
    onSubmit: () => {
      setSubmitted(true);
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .min(2, 'Имя должно быть больше 2х символов!')
        .max(50, 'Имя не должно превышать длину в 50 символов!')
        .required('Поле обязательно к заполнению'),
      email: yup
        .string()
        .email('Email введен не корректно')
        .required('Email обязателен к заполению'),
      company: yup
        .string()
        .min(2, 'Название компании/должности должно быть больше 2х символов!')
        .max(
          50,
          'Название компании/должности не должно превышать длину в 50 символов!'
        )
        .required('Поле обязательно к заполнению'),
      phone: yup
        .string()
        .test(
          'phone-len',
          'Номер телефона должен содержать не меньше 6 символов!',
          (val = '') => {
            return val.replace(/-|\(|\)|_|\+|\s/g, '').length > 6;
          }
        ),
    }),
  });

  return (
    <div>
      <div className='w-full max-w-xs'>
        <form className='mb-4  rounded bg-white px-8 pt-6 pb-8 shadow-md'>
          <div className='mb-4'>
            <label className='mb-2 block text-sm font-bold text-gray-700'>
              Номер телефона
            </label>

            <InputMask
              className='focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
              mask='+9 (999) 999-99-99'
              type='text'
              id='phone'
              name='phone'
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></InputMask>
            {formik.errors.phone && formik.touched.phone ? (
              <div className='text-red-600'>{formik.errors.phone}</div>
            ) : null}
          </div>
          <div className='mb-6'>
            <label className='mb-2 block text-sm font-bold text-gray-700'>
              ФИО
            </label>
            <input
              className='focus:shadow-outline mb-3 w-full appearance-none rounded  py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
              id='password'
              type='text'
              name='name'
              placeholder=''
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.name && formik.touched.name ? (
              <div className='text-red-600'>{formik.errors.name}</div>
            ) : null}
            <p className='text-xs italic text-red-500'></p>
          </div>

          <div className='mb-4'>
            <label className='mb-2 block text-sm font-bold text-gray-700'>
              Email
            </label>
            <input
              className='focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
              placeholder=''
              type='email'
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className='text-red-600'>{formik.errors.email}</div>
            ) : null}
          </div>

          <div className='mb-4'>
            <label className='mb-2 block text-sm font-bold text-gray-700'>
              Компания(должность)
            </label>
            <input
              className='focus:shadow-outline mb-3 w-full appearance-none rounded  py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
              type='text'
              name='company'
              value={formik.values.company}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.company && formik.touched.company ? (
              <div className='text-red-600'>{formik.errors.company}</div>
            ) : null}
          </div>

          <div className='mb-4'>
            <label className='mb-2 block text-sm font-bold text-gray-700'>
              Комментарий
            </label>
            <textarea
              className='focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
              id='username'
              placeholder=''
              name='message'
            />
          </div>

          <div className='flex items-center justify-between'>
            <button
              className='focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none'
              type='button'
            >
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestForm;
