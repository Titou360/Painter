import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Header from '../components/header';
import LanguageSelector from '../components/switchLangue';

export default function Home() {
  const { t } = useTranslation('header');
  return (
    <main className="bg-painterGreyLight/50 dark:bg-painterDark">
      <Header />
      <h1 className="text-painterOrange text-4xl">Test</h1>
      <Link href="/page2">Lien vers page 2</Link>
      <LanguageSelector />

      <p className="font-bold text-red-500 ">{t('hourly')}</p>
    </main>
  );
}
