import Partner, { PartnerProps } from '@/components/Partnership/Partner';
export interface PartnerListProps {
  partnerList: PartnerProps[];
}

const PartnerList: React.FunctionComponent<PartnerListProps> = ({
  partnerList,
}) => {
  return (
    <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {partnerList.map((partner) => {
        return (
          <Partner
            key={partner.imageSrc}
            imageSrc={partner.imageSrc}
            title={partner.title}
            description={partner.description}
            tagArray={partner.tagArray}
          ></Partner>
        );
      })}
    </div>
  );
};

export default PartnerList;
