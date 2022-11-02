import { Image, Modal } from 'semantic-ui-react';
import { trigger } from '@/components/Events/events';
import { useState } from 'react';

interface ModalWindowProps {
  imageSrc: string;
}

const ModalWindow: React.FC<ModalWindowProps> = ({ imageSrc }) => {
  const [open, setOpen] = useState(true);

  if (!open) {
    trigger('modalExit');
  }
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Modal
      dimmer='blurring'
      closeIcon={click ? false : true}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='large'
    >
      <Modal.Content image>
        <Image centered className={'scale-100'} fluid src={imageSrc} />
      </Modal.Content>
    </Modal>
  );
};

export default ModalWindow;
