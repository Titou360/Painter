import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className='dark:bg-painterDark'>
      <h1 className='dark:text-painterOrange'>Test</h1>
      <Navbar />
      <Link href="/page2">Lien vers page 2</Link>
    </main>
  );
}
