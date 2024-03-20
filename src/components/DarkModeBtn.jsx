import { MoonIcon, SunIcon } from './Icon.jsx';
import useThemeSwitcher from './hooks/useThemeSwitcher.js';

const DarkModeBtn = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <button
      aria-label="button dark mode"
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
      className="ml-3 flex justify-center rounded-full p-1"
    >
      {mode === 'dark' ? <SunIcon className={'fill-painterOrange'} /> : <MoonIcon className={'fill-white'} />}
    </button>
  );
};

export default DarkModeBtn;
