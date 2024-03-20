import ExtraFooter from './ExtraFooter';

const Footer = () => {
  return (
    <>
      <div className="w-4/5 mx-auto my-16">
        <h2 className="text-white dark:text-painterDark text-4xl">Ready to take action ?</h2>
      </div>
      <div className="w-full flex">
        <div className="flex flex-col w-1/3">
          <h3 className="text-painterGreyLight text-2xl font-Poppins">Let&apos;s talk</h3>
          <ul>
            <li className="text-white text-2xl">800 123 4567</li>
            <li className="text-white text-2xl">you@domain.com</li>
          </ul>
        </div>
        <div className="flex flex-col w-1/3">
          <h3 className="text-painterGreyLight text-2xl font-Poppins">Our services</h3>
          <ul>
            <li className="text-white text-lg">Web Development</li>
            <li className="text-white text-lg">Marketing</li>
            <li className="text-white text-lg">Web Development</li>
            <li className="text-white text-lg">Marketing</li>
            <li className="text-white text-lg">Web Development</li>
            <li className="text-white text-lg">Marketing</li>
          </ul>
        </div>
        <div className="flex flex-col w-1/3">
          <h3 className="text-painterGreyLight text-2xl font-Poppins">Our location</h3>
          <ul>
            <li className="text-white text-lg">12345 Porto Blvd</li>
            <li className="text-white text-lg">Suite 1500</li>
            <li className="text-white text-lg">Los Angeles, California 90000</li>
          </ul>
        </div>
      </div>

      <div>
        <ExtraFooter />
      </div>
    </>
  );
};

export default Footer;
