import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import about from '../../public/assets/img/about.jpg';
import logoAbout from '../../public/assets/img/logo_about.png';
import logoAboutMoutain from '../../public/assets/img/logo_about_mountain.png';
import Title from './Title';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const { t } = useTranslation('about');

  const imgAboutRef = useRef();

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: imgAboutRef.current,
        start: 'right 40%',
        end: 'right 60%', // Commencer l'animation lorsque le haut de l'élément atteint le centre de la fenêtre
        scrub: 2,
        immediateRender: true
      }
    });

    timeline.to(imgAboutRef.current, {
      x: '-5vw', // Mouvement vers la gauche
      opacity: 0.9, // Opacité réduite
      ease: 'none', // Fonction d'animation
      duration: 4 // Durée de l'animation
    });
  }, []);

  return (
    <div className="flex items-center gap-10 w-[100%] ">
      <section className="p-16 flex flex-col gap-4 w-[60%] ">
        <Title title={t('aboutTitle')} subtitle={t('aboutSubtitle')} />
        <p className="text-[1.3em] font-Poppins font-bold text-painterDark">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit magna, consectetur at suscipit eu, dapibus vel odio. Mauris ac nulla at
          ligula interdum ullamcorper.
        </p>
        <p className="text-[1em] font-Poppins text-painterGreyLight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit magna, consectetur at suscipit eu, dapibus vel odio. Mauris ac nulla at
          ligula interdum ullamcorper.
        </p>
        <p className="text-[0.9em] font-Poppins text-painterGreyLight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit magna, consectetur at suscipit eu, dapibus vel odio. Mauris ac nulla at
          ligula interdum ullamcorper.
        </p>
        <div className="flex gap-12 mt-6 justify-center ">
          <Image src={logoAbout} alt="logo partenaire" height={50} width={100} />
          <Image src={logoAboutMoutain} alt="logo climb mountain" width={200} />
        </div>
      </section>

      <div ref={imgAboutRef}>
        <Image src={about} alt="mise en scene bureau" className="mt-[2em] mr-[4em] ml-4 rounded-lg " />
      </div>
    </div>
  );
}
