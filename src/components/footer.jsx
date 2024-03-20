import ExtraFooter from './extraFooter';

const Footer = () => {
  return (
    <>
      <div className="flex flex-col text-white p-5 justify-between items-center">
        <h2 className="text-[3em] mb-[0.5em] font-Cormorant font-bold">W Ready to take action ?</h2>

        <div className="w-full flex">
          <div className="flex flex-col w-1/3">
            <h3 className="text-painterGreyLight font-normal text-2xl opacity-[0.6]font-Poppins">Let&apos;s talk</h3>
            <ul className="">
              <li className="text-2xl">800 123 4567</li>
              <li className="text-2xl">you@domain.com</li>
            </ul>
          </div>
          <div className="flex flex-col w-1/3">
            <h3 className="text-painterGreyLight font-normal text-2xl font-Poppins">Our services</h3>
            <ul className="list-disc">
              <li className="text-[0.9em]">Web Development</li>
              <li className="text-[0.9em] ">Marketing</li>
              <li className="text-[0.9em]">Web Development</li>
              <li className="text-[0.9em]">Marketing</li>
              <li className="text-[0.9em]">Web Development</li>
              <li className="text-[0.9em]">Marketing</li>
            </ul>
          </div>
          <div className="flex flex-col w-1/3">
            <h3 className="text-painterGreyLight font-normal text-2xl font-Poppins">Our location</h3>
            <ul>
              <li className="text-[0.9em]">12345 Porto Blvd</li>
              <li className="text-[0.9em]">Suite 1500</li>
              <li className="text-[0.9em]">Los Angeles, California 90000</li>
            </ul>
          </div>
        </div>
        <div>
          <ExtraFooter />
        </div>
      </div>
    </>
  );
};

export default Footer;
