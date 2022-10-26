const TestForm: React.FunctionComponent = () => {
  return (
    <div>
      <div className='w-full max-w-xs'>
        <form className='mb-4  rounded bg-white px-8 pt-6 pb-8 shadow-md'>
          <div className='mb-4'>
            <label className='mb-2 block text-sm font-bold text-gray-700'>
              Номер телефона
            </label>
            <input
              className='focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
              id='username'
              type='text'
              placeholder=''
            />
          </div>
          <div className='mb-6'>
            <label className='mb-2 block text-sm font-bold text-gray-700'>
              ФИО
            </label>
            <input
              className='focus:shadow-outline mb-3 w-full appearance-none rounded  py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
              id='password'
              type='password'
              placeholder=''
            />
            <p className='text-xs italic text-red-500'></p>
          </div>

          <div className='mb-4'>
            <label className='mb-2 block text-sm font-bold text-gray-700'>
              Email
            </label>
            <input
              className='focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
              id='username'
              type='text'
              placeholder=''
            />
          </div>

          <div className='mb-4'>
            <label className='mb-2 block text-sm font-bold text-gray-700'>
              Компания(должность)
            </label>
            <input
              className='focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
              id='username'
              type='text'
              placeholder=''
            />
          </div>

          <div className='mb-4'>
            <label className='mb-2 block text-sm font-bold text-gray-700'>
              Комментарий
            </label>
            <textarea
              className='focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
              id='username'
              placeholder=''
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
