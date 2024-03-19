import Image from 'next/image';
import DarkModeBtn from './DarkModeBtn';

const Navbar = () => {
  return (
    <nav>
      <Image src={Logo} alt="Logo de painter" />
      <div>
        <DarkModeBtn />
      </div>
    </nav>
  );
};

export default Navbar;
