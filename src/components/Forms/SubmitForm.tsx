import SubmitButton from '@/components/buttons/SubmitButton';
import { useFormik } from 'formik';
import { useState, useCallback } from 'react';
import InputMask from 'react-input-mask';
import * as yup from 'yup';
import { Button, Grid, Header, Segment, Portal } from 'semantic-ui-react';
import { Image, Modal } from 'semantic-ui-react';

const SubmitForm: React.FunctionComponent = () => {
  const [submitButton, setSubmitButton] = useState(false);
  const [state, setState] = useState(false);
  const [sumbitResult, setSubmitResult] = useState(false);

  const handleClose = () => setState(false);
  const handleOpen = () => setState(true);
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      company: '',
      phone: '',
      comment: '',
    },
    onSubmit: async () => {
      let responseSuccess = false;
      for (let i = 0; i < 4; i++) {
        const response = await fetch('/api/send-to-telegram', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formik.values),
        });
        if (response.ok) {
          responseSuccess = response.ok;
          setTimeout(() => {
            setSubmitButton(false);
          }, 3000);
          setSubmitButton(true);

          break;
        }
        console.log('bad');
      }
      for (let i = 0; i < 4; i++) {
        const response = await fetch('/api/send-to-mail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formik.values),
        });
        if (response.ok) {
          responseSuccess = response.ok;
          setTimeout(() => {
            setSubmitButton(false);
          }, 3000);
          setSubmitButton(true);

          break;
        }

        console.log('bad-mail');
      }
      if (responseSuccess) {
        setSubmitResult(true);
        setState(true);
      } else {
        setSubmitResult(false);
        setState(true);
      }
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
      company: yup.string(),
      // company: yup
      //   .string()
      //   .min(2, 'Название компании/должности должно быть больше 2х символов!')
      //   .max(
      //     50,
      //     'Название компании/должности не должно превышать длину в 50 символов!'
      //   )
      //   .required('Поле обязательно к заполнению'),
      phone: yup
        .string()
        .test(
          'phone-len',
          'Номер телефона должен содержать не меньше 6 символов!',
          (val = '') => {
            return val.replace(/-|\(|\)|_|\+|\s/g, '').length > 6;
          }
        ),
      comment: yup.string(),
    }),
  });

  return (
    <div>
      <div className='w-full max-w-xs sm:max-w-md md:max-w-xl '>
        <form
          onSubmit={formik.handleSubmit}
          className='mb-4   rounded bg-white px-8 pt-6 pb-8 shadow-md'
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 '>
            <div className='mb-4 px-4'>
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
            <div className='mb-6 px-4'>
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

            <div className='mb-4 px-4'>
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

            <div className='mb-4 px-4'>
              <label className='mb-2 block text-sm font-bold text-gray-700'>
                Компания
              </label>
              <input
                className='focus:shadow-outline mb-3 w-full appearance-none rounded  py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
                type='text'
                name='company'
                value={formik.values.company}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {/* {formik.errors.company && formik.touched.company ? (
                <div className='text-red-600'>{formik.errors.company}</div>
              ) : null} */}
            </div>
          </div>

          <div className='mb-4 px-4'>
            <label className='mb-2 block text-sm font-bold text-gray-700'>
              Комментарий
            </label>
            <textarea
              className='focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
              placeholder=''
              name='comment'
              value={formik.values.comment}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.comment && formik.touched.comment ? (
              <div className='text-red-600'>{formik.errors.comment}</div>
            ) : null}
          </div>

          <div className='flex items-center justify-between px-4'>
            {/* <button
              className='focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none'
              type='submit'
              disabled={submitButton}
            >
              Отправить
            </button> */}
            <SubmitButton
              text='Отправить'
              type='submit'
              disabled={submitButton}
            ></SubmitButton>
          </div>
        </form>

        <Modal
          dimmer='blurring'
          onClose={handleClose}
          onOpen={handleOpen}
          open={state}
          size='small'
        >
          <Modal.Header>
            {sumbitResult
              ? 'Данные успено отправлены'
              : 'Ошибка отправки данных'}
          </Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <div className='flex flex-col'>
                {sumbitResult
                  ? 'Ваши данные успешно отправлены, в ближайшее время с вами свяжутся'
                  : 'При отправке Ваших данных возникла ошибка, пожалуйста, свяжитесь с нами по адрессу почты sales@tehnoprogress78.ru'}
              </div>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button content='Закрыть окно' negative onClick={handleClose} />
          </Modal.Actions>
        </Modal>
      </div>
    </div>
  );
};

export default SubmitForm;
