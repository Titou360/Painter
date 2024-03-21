import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'right 40%',
        end: 'right 60%', // Commencer l'animation lorsque le haut de l'élément atteint le centre de la fenêtre
        scrub: 2,
        immediateRender: true
      }
    });

    timeline.to(heroRef.current, {
      x: '-5vw', // Mouvement vers la gauche
      opacity: 0.9, // Opacité réduite
      ease: 'none', // Fonction d'animation
      duration: 4 // Durée de l'animation
    });
  }, []);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'right 40%',
        end: 'right 60%', // Commencer l'animation lorsque le haut de l'élément atteint le centre de la fenêtre
        scrub: 2,
        immediateRender: true
      }
    });

    timeline.to(titleRef.current, {
      x: '5vw', // Mouvement vers la droite
      opacity: 0.9, // Opacité réduite
      ease: 'none', // Fonction d'animation
      duration: 4 // Durée de l'animation
    });
  }, []);

  const { t } = useTranslation('hero');
  return (
    <div className="w-full">
      <div ref={titleRef} className="relative float-left">
        <h1 className="w-[30vw] h-[30vw] ml-[5vw] text-4xl font-Poppins font-bold text-painterOrange">TITRE h1</h1>
      </div>
      <div ref={heroRef} className="bg-painterGrey relative rounded-full w-[30vw] h-[30vw] mr-[10vw] float-right">
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-painterOrange text-xl text-left font-bold">
          {t('hero:slogan')}
        </p>
      </div>
    </div>
  );
};

export default Hero;
