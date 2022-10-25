interface PartnerProps {
  text: string;
  title?: string;
  imageSrc: string;
  isReverse: boolean;
}

const Partner: React.FunctionComponent<PartnerProps> = ({
  text,
  title,
  imageSrc,
  isReverse,
}) => {
  return (
    <div className='flex'>
      <img src={imageSrc}></img>
      <div>{text}</div>
    </div>
  );
};

export default Partner;
