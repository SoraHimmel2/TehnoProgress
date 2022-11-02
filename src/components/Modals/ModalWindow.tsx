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
      size='small'
    >
      <Modal.Content image>
        <Image
          centered
          className={click ? 'scale-125' : 'scale-90'}
          fluid
          src={imageSrc}
          onClick={handleClick}
        />
      </Modal.Content>
    </Modal>
  );
};

export default ModalWindow;
