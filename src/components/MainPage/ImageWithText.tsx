// interface ImageWithTextProps {

// }

const ImageWithText: React.FunctionComponent = () => {
  return (
    <div className=''>
      <div className=''>
        <div className=' relative  text-white    '>
          <div className=' absolute    object-cover p-6 pt-24 text-left  text-white  sm:bottom-20 lg:border-black '>
            <div className='bg-slate-700  p-6 md:bg-none lg:w-2/3 '>
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
              sit amet consectetur adipisicing elit.
            </div>
          </div>
          <img
            src='https://thumbs.dreamstime.com/z/gas-turbine-engine-feed-gas-compressor-located-inside-pressurized-enclosure-gas-turbine-engine-used-offshore-gas-turbine-117572042.jpg'
            className=' min-h-[750px] w-full object-none mix-blend-overlay blur-sm lg:max-h-[800px] xl:object-cover '
          />
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;
