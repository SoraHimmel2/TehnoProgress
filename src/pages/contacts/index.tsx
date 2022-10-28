import Requisites from '@/components/Contacts/Reqisites';
import ContactsInfo from '@/components/Contacts/ContactsInfo';

const Contacts: React.FunctionComponent = () => {
  return (
    <div className='mt-24   justify-center'>
      <h1 className='text-center'>Контакты</h1>
      <div className='flex   justify-center '>
        <ContactsInfo />
      </div>
      <h1 className='text-center'>Реквизиты</h1>
      <div className='flex   justify-center '>
        <Requisites />
      </div>
      {/* 
      <h1 className='text-center'>Реквизиты</h1> */}
    </div>
  );
};

export default Contacts;
