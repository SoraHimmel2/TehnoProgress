import Image from 'next/image';
import Square from '~/svg/Square.svg';
// interface ImageWithTextProps {

// }

const ImageWithText: React.FunctionComponent = () => {
  return (
    <div className=''>
      <div className=''>
        <div className=' relative  overflow-scroll text-white    '>
          <div className=' absolute   object-cover p-6 pt-24 text-left  text-white  sm:bottom-20 lg:border-black '>
            <div className='bg-slate-700  p-6 md:bg-none lg:w-2/3'>
              <h3>Название Компании</h3>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, praesentium reprehenderit perspiciatis laborum enim ea
              blanditiis aspernatur et at, veritatis accusantium provident
              possimus voluptatum tempora dolores beatae, magni a laboriosam!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
              nostrum cum sint atque, culpa nesciunt ut eligendi omnis odio
              placeat excepturi, corrupti eaque dolorum? Cum aliquam doloremque
              possimus nesciunt. Quis? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Blanditiis iusto repudiandae quia molestiae nemo
              cum minus accusamus omnis laudantium ea optio quidem cumque,
              suscipit tempora eos provident error ad quos! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Minus accusamus esse odit
              sed officiis reprehenderit sapiente vero praesentium suscipit non
              sint, repudiandae quidem obcaecati maiores in, eligendi aut beatae
              numquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Sit, magni odio maxime qui labore ea veritatis ratione, delectus
              vero, error consequuntur animi eos cum? Blanditiis corporis omnis
              non ad. Obcaecati?
            </div>
          </div>
          <img
            src='https://thumbs.dreamstime.com/z/gas-turbine-engine-feed-gas-compressor-located-inside-pressurized-enclosure-gas-turbine-engine-used-offshore-gas-turbine-117572042.jpg'
            className=' min-h-[700px] w-full object-none mix-blend-overlay blur-sm lg:max-h-[800px] xl:object-cover '
          />
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;
