import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import logoAbout from '../../public/assets/img/logo_about.png';
import logoAboutMoutain from '../../public/assets/img/logo_about_mountain.png';
import Title from './title';

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
        start: 'left 20%',
        end: 'left 90%',
        scrub: 2,
        immediateRender: true
      }
    });

    timeline.to(imgAboutRef.current, {
      x: '-5vw', // Mouvement vers la gauche
      rotation: 360, // Rotation de 360 degrés
      opacity: 0.9, // Opacité réduite
      ease: 'none', // Fonction d'animation
      duration: 4,
      marker: true
    });
  }, []);

  return (
    <div className="flex items-center gap-10 w-[100%] ">
      <div className="p-16 flex flex-col gap-4 w-[60%] ">
        <Title title={t('aboutTitle')} subtitle={t('aboutSubtitle')} />
        <p className="text-[1.3em] font-Poppins font-bold text-painterDark dark:text-painterGreyLight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit magna, consectetur at suscipit eu, dapibus vel odio. Mauris ac nulla at
          ligula interdum ullamcorper.
        </p>
        <p className="text-[1em] font-Poppins text-painterGreyLight dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit magna, consectetur at suscipit eu, dapibus vel odio. Mauris ac nulla at
          ligula interdum ullamcorper.
        </p>
        <p className="text-[0.9em] font-Poppins text-painterGreyLight dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit magna, consectetur at suscipit eu, dapibus vel odio. Mauris ac nulla at
          ligula interdum ullamcorper.
        </p>
        <div className="flex gap-12 mt-6 justify-center  ">
          <div className="dark:bg-white p-2 rounded-lg">
            <Image src={logoAbout} alt="logo partenaire" height={50} width={100} />
          </div>
          <div className="dark:bg-white p-2 rounded-lg">
            <Image src={logoAboutMoutain} alt="logo climb mountain" width={200} />
          </div>
        </div>
      </div>

      <div ref={imgAboutRef} className="bg-blue-500">
        <p className="bg-blue-500 p-6">Test</p>
      </div>
    </div>
  );
}
