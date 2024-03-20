//scroll
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);
  
// i18n 
import { useTranslation } from 'react-i18next';

//background image
//page 1
import backgroundImage from '../../public/assets/img/paintWBP.webp';
import Header from '../components/header';


//composants
import About from '../components/About';
import ExtraFooter from '../components/ExtraFooter';
import Hero from '../components/Hero';
import ScrollInfo from '../components/scrollInfo';

export default function Home() {
  
  const { t } = useTranslation('header');
const component = useRef();
  const slider = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray('.panel');
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => '+=' + slider.current.offsetWidth
        }
      });
    }, component);
    return () => ctx.revert();
  }, [slider]);

  return (
    <div className="App" ref={component}>
      <div className="container bg-painterDark" ref={slider}>
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
        <section className="panel">
          <h2>TWO</h2>
        </section>
        <section className="panel">
          <h2>THREE</h2>
        </section>
      </div>
    </div>
  );
}
