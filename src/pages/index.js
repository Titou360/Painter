import Link from 'next/link';
import Navbar from '../components/Navbar';
import Header from '../components/header';
import LanguageSelector from '../components/switchLangue'; 
import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t } = useTranslation('header');
  return (
    <main className="bg-painterGreyLight dark:bg-painterDark">
      <h1 className="text-red-600 text-2xl">Test</h1>
      <Navbar />

      <Link href="/page2">Lien vers page 2</Link>
      <LanguageSelector />

      <p className="font-bold text-red-500 ">{t('hourly')}</p>
      <Header />
    </main>
  );
}
