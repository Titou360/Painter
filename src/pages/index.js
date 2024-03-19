import { useTranslation } from 'react-i18next';

// scroll horizontal
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap/dist/gsap';
import { useEffect } from 'react';
import Header from '../components/header';

gsap.registerPlugin(ScrollTrigger);

//composants

export default function Home() {
  // i18n
  const { t } = useTranslation('header');

  //scroll horizontal
  useEffect(() => {
    const sections = gsap.utils.toArray('.panel');

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.container',
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        scrub: 1.23,
        end: () => '+=' + document.querySelector('.container').offsetWidth
      }
    });
  }, []);
  return (
<<<<<<< HEAD
    <div className="container bg-gray-400">
      <section className="panel">
        <Header />
        <h1>SCROLL DOWN</h1>
      </section>
      <section className="panel">
        <h2>ONE</h2>
      </section>
      <section className="panel">
        <h2>TWO</h2>
      </section>
      <section className="panel">
        <h2>THREE</h2>
      </section>
    </div>
=======
    <>
      <div className="container bg-painterGreyLight/50 dark:bg-painterDark">
        {' '}
        <section className="flex flex-col">
          <Header />
          <p>{t('hourly')}</p>
          <h1>SCROLL DOWN</h1>
        </section>
        <section className="panel">
          <About />
        </section>
        <section className="panel">
          <h2>TWO</h2>
        </section>
        <section className="panel">
          <h2>THREE</h2>
        </section>
        <section className="panel">
          <h2>FOUR</h2>
        </section>
        <section className="panel">
          <h2>FIVE</h2>
        </section>
        <section className="panel">
          <h2>FOOTER</h2>
        </section>
      </div>
    </>
>>>>>>> e73b9b544734e0c41b92adc6d1fb6522f6f6655b
  );
}
