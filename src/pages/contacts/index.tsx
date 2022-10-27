import Requisites from '@/components/Contacts/Reqisites';
import ContactsInfo from '@/components/Contacts/ContactsInfo';

const Contacts: React.FunctionComponent = () => {
  return (
    <div className='mt-20 grid grid-cols-2 md:grid-rows-2'>
      <ContactsInfo></ContactsInfo>
      <Requisites></Requisites>
    </div>
  );
};

export default Contacts;
