import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const Table = ({ number, text }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <p id={`counter-${number}`} className="text-[3em] text-white">
        0
      </p>
      <p className="text-[2em] text-painterGreyLight">{text}</p>
    </div>
  );
};

export default function Number() {
  const { t } = useTranslation('number');
  const componentRef = useRef(null);

  //utilisation observer pour lancer l'animation uniquement lorsque le composant est visible
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        function animateCounter(target, duration) {
          let currentCount = 0;
          const increment = 1;
          const interval = duration / (target / increment);
          const counterElement = document.getElementById(`counter-${target}`);

          const counterInterval = setInterval(() => {
            if (currentCount >= target) {
              clearInterval(counterInterval);
            } else {
              currentCount += increment;
              counterElement.innerText = currentCount;
            }
          }, interval);
        }

        animateCounter(20, 3000);
        animateCounter(120, 3000);
        animateCounter(200, 3000);
        animateCounter(320, 6000);

        observer.disconnect();
      }
    });

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef) {
        observer.unobserve(componentRef);
      }
    };
  }, []);

  return (
    <div ref={componentRef} className="flex flex-col items-center gap-[5em]">
      <h1 className="text-white text-[3.5em] mt-10">{t('title')}</h1>
      <section className="grid grid-cols-2 gap-[10em]">
        <Table number="20" text={t('business')} />
        <Table number="120" text={t('clients')} />
        <Table number="200" text={t('score')} />
        <Table number="320" text={t('coffee')} />
      </section>
      <div className="formePolygonV"></div>
    </div>
  );
}
