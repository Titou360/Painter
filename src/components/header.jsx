import Image from 'next/image';
import Logo from '../../public/assets/img/sablier.gif';
import Navbar from './navbar';
import LanguageSelector from './SwitchLangue';
import DarkModeBtn from './darkModeBtn';

export default function Header() {
  return (
    <header className="flex justify-between my-5 ml-5 mt-5 mr-10">
      <div>
        <Image src={Logo} width={70} height={70} alt="Logo de l'entreprise" />
      </div>
      <div className="flex flex-row flex-nowrap items-stretch">
        <Navbar />
        <DarkModeBtn />
        <LanguageSelector />
      </div>
    </header>
  );
}
