import React from 'react'
import { MoonIcon, SunIcon } from './icon.jsx';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const Navbar = () => {
    const [mode, setMode] = useThemeSwitcher();
  return (
    <div>
      <button
        aria-label="button dark mode"
        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        className="ml-3 flex items-center justify-center rounded-full p-1"
      >
        {mode === 'dark' ? <SunIcon className={'fill-painterOrange'} /> : <MoonIcon className={'fill-painterDark'} />}
      </button>
    </div>
  );
}

export default Navbar
