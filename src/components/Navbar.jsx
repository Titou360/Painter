
import Link from 'next/link';
import { useTranslation } from 'react-i18next';


const Navbar = () => {
  const { t } = useTranslation('header');
  return (
    <nav>
      <Link href="#" className="text-Poppins_bold" title="HOME" />
    </nav>
  );
};

export default Navbar;
