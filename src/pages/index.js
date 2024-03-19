import Link from 'next/link';
import Navbar from '../components/Navbar';
import Header from '../components/header';
import LanguageSelector from '../components/switchLangue'; 

export default function Home() {
  return (
    <main className="bg-painterGreyLight dark:bg-painterDark">
      <h1 className="text-red-600 text-2xl">Test</h1>
      <Navbar />
      <Link href="/page2">Lien vers page 2</Link>
      <LanguageSelector />
      <Header />
    </main>
  );
}
