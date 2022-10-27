import Requisites from '@/components/Contacts/Reqisites';
import ContactsInfo from '@/components/Contacts/ContactsInfo';

const Contacts: React.FunctionComponent = () => {
  return (
    <div className='mt-24 flex flex-col items-center  sm:flex-row sm:justify-center'>
      <ContactsInfo></ContactsInfo>
      <Requisites></Requisites>
    </div>
  );
};

export default Contacts;
