import DarkModeBtn from './DarkModeBtn';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className='flex justify-between'>
      <div></div>
      <div className='flex flex-nowrap'>
        <Navbar />
        <DarkModeBtn />
      </div>
    </header>
  );
}
