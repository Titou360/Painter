import DarkModeBtn from './DarkModeBtn';
import Navbar from './Navbar';
import LanguageSelector from '../components/switchLangue';

export default function Header() {
  return (
    <header className="flex justify-between">
      <div></div>
      <div className="flex flex-row flex-nowrap items-stretch">
        <Navbar />
        <DarkModeBtn />
        <LanguageSelector />
      </div>
    </header>
  );
}
