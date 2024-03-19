import { useTranslation } from 'react-i18next';
import Header from '../components/header';

// scroll horizontal
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap/dist/gsap';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

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
    <>
      <div className="container bg-painterGreyLight/50 dark:bg-painterDark">
        {' '}
        <Header />

        <section className="panel flex flex-col">
          <p>{t('hourly')}</p>
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
    </>
  );
}
