
import Link from 'next/link';
import { useTranslation } from 'react-i18next';


const Navbar = () => {
  const { t } = useTranslation('header');
  return (
    <nav>
      <Link href="#" className="font-Poppins uppercase" title="home" />
      <Link href="#" className="font-Poppins uppercase" title="about" />
      <Link href="#" className="font-Poppins uppercase" title="services" />
      <Link href="#" className="font-Poppins uppercase" title="work" />
      <Link href="#" className="font-Poppins uppercase" title="contact" />
    </nav>
  );
};

export default Navbar;
