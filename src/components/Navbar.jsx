
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const CustomLink = ({ href, title, className = '' }) => {

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`
      h-[2px] inline-block bg-primary absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const { t } = useTranslation('header');
  return (
    <nav className="flex flex-nowrap gap-5">
      <CustomLink
        href="#"
        className="text-white text-sm hover:text-painterOrange transition duration-300 ease font-bold font-Poppins uppercase"
        title={t('navbar:home')}
      />
      <CustomLink
        href="#"
        className="text-white text-sm hover:text-painterOrange transition duration-300 ease font-bold font-Poppins uppercase"
        title={t('navbar:about')}
      />
      <CustomLink
        href="#"
        className="text-white text-sm hover:text-painterOrange transition duration-300 ease font-bold font-Poppins uppercase"
        title={t('navbar:services')}
      />
      <CustomLink
        href="#"
        className="text-white text-sm hover:text-painterOrange transition duration-300 ease font-bold font-Poppins uppercase"
        title={t('navbar:work')}
      />
      <CustomLink
        href="#"
        className="text-white text-sm hover:text-painterOrange transition duration-300 ease font-bold font-Poppins uppercase"
        title={t('navbar:contact')}
      />
    </nav>
  );
};

export default Navbar;
