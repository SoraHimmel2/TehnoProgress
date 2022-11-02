import { useCallback, useEffect, useState } from 'react';

import { off, on } from '@/components/Events/events';
import ModalWindow from '@/components/Modals/ModalWindow';

interface PhotosProps {
  images: Image[];
  textClass: string;
  text: string;
}
export interface Image {
  id: number;
  src: string;
}
const Photos: React.FC<PhotosProps> = ({ images, textClass, text }) => {
  const [showPhoto, setShowPhoto] = useState(false);
  const [imageSrc, setPhotoSrc] = useState('');
  const openModal = useCallback(() => setShowPhoto(false), []);

  useEffect(() => {
    on('modalExit', openModal);

    return () => {
      off('modalExit', openModal);
    };
  }, [openModal]);

  return (
    <div className=''>
      <h1 className={textClass}>{text}</h1>
      <div
        id='cerificates'
        className='mx-4 grid grid-cols-1 justify-items-center gap-0  md:mx-12 md:grid-cols-2'
      >
        {images.map((image) => (
          <div
            key={image.id}
            className='my-10 w-[90%] overflow-hidden  rounded border-primary-900 shadow-xl    md:w-[75%] lg:w-[60%] xl:w-[60%]'
          >
            <img
              alt='certificate image'
              className=' p-2'
              onClick={() => {
                setPhotoSrc(image.src);
                setShowPhoto(true);
              }}
              src={image.src}
            ></img>
          </div>
        ))}
        {showPhoto ? <ModalWindow imageSrc={imageSrc} /> : null}
      </div>
    </div>
  );
};

export default Photos;
