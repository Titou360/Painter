import Link from 'next/link';
import Header from '../components/header';
import LanguageSelector from '../components/switchLangue';

export default function Home() {
  return (
    <main>
      <h1>Test</h1>
      <Link href="/page2">Lien vers page 2</Link>
      <LanguageSelector />
      <Header />
    </main>
  );
}
