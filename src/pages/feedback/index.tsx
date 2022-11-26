import SubmitForm from '@/components/Forms/SubmitForm';
import Head from 'next/head';

const FeedBack: React.FunctionComponent = () => {
  return (
    <div className='mt-24'>
      <Head>
        <title>Технопрогресс Обратная Связь</title>
        <link rel='canonical' href='https://tehnoprogress-russia.ru/feedback' />
        <meta name='keywords' content='технопрогресс контакты, обратная связь'></meta>
      </Head>
      <h2 className='py-4 text-center'>Обратная связь</h2>
      <div className='flex  justify-center '>
        <SubmitForm></SubmitForm>
      </div>
    </div>
  );
};

export default FeedBack;
