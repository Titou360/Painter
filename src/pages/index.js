import { useTranslation } from 'react-i18next';
//background image
//page 1
import backgroundImage from '../../public/assets/img/paintWBP.webp';

// scroll horizontal
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap/dist/gsap';
import { useEffect } from 'react';
import Header from '../components/header';

gsap.registerPlugin(ScrollTrigger);

//composants
import About from '../components/About';
import ExtraFooter from '../components/ExtraFooter';
import Hero from '../components/Hero';
import ScrollInfo from '../components/scrollInfo';

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
      <div className="container bg-painterDark">
        <section
          className="panel flex flex-col justify-between"
          style={{
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: '70%', // rétrécissement de l'image à 50%
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
          }}
        >
          <Header />
          <Hero />
          <ScrollInfo />
          <ExtraFooter />
        </section>
        <section className="panel bg-white dark:bg-painterDark">
          <About />
        </section>
        <section className="panel bg-painterOrange">
          <h2>TWO</h2>
        </section>
        <section className="panel bg-white">
          <h2>THREE</h2>
        </section>
      </div>
    </>
  );
}
