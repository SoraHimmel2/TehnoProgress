import SubmitForm from '@/components/Forms/SubmitForm';

const FeedBack: React.FunctionComponent = () => {
  return (
    <div className='mt-24'>
      <h1 className='py-4 text-center'>Связаться с нами</h1>
      <div className='flex  justify-center '>
        <SubmitForm></SubmitForm>
      </div>
    </div>
  );
};

export default FeedBack;
