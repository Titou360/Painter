import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Title from './Title';

import Image from 'next/image';
import projet1 from '../../public/assets/img/projetSelected1.jpg';
import projet2 from '../../public/assets/img/projetSelected2.jpg';
import projet3 from '../../public/assets/img/projetSelected3.jpg';
import projet4 from '../../public/assets/img/projetSlected4.jpg';

export default function SelectedProjet() {
  const { t } = useTranslation('projet');

  const ballRef = useRef(null);
  const cursorTextRef = useRef(null);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      updateBallAndTextPosition();
    };

    const updateBallAndTextPosition = () => {
      ballRef.current.style.left = cursorPosition.x - 300 + 'px';
      ballRef.current.style.top = cursorPosition.y + 'px';
      cursorTextRef.current.style.left = cursorPosition.x - 300 + 'px';
      cursorTextRef.current.style.top = cursorPosition.y + 'px';
    };

    document.addEventListener('mousemove', updateCursor);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
    };
  }, [cursorPosition]);

  const handleHoverEnter = (e) => {
    cursorTextRef.current.innerHTML = e.target.getAttribute('data-cursor-text');
    cursorTextRef.current.style.opacity = '1';
    ballRef.current.style.height = '50px';
    ballRef.current.style.width = '100px';
  };

  const handleHoverLeave = () => {
    cursorTextRef.current.style.opacity = '0';
    ballRef.current.style.height = '0px';
    ballRef.current.style.width = '0px';
    ballRef.current.style.display = 'block';
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="h-[90vh] w-[25%] border-r-2 border-painterGreyLight flex flex-col gap-4 justify-center p-6 ">
        <Title title={t('projetTitle')} subtitle={t('projetSubtitle')} />
        <p className="text-[1.3em] font-semibold font-Poppins dark:text-painterGreyLight">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Link href="#">
          <p className="underline text-painterOrange text-[1.3em]">{t('btnContact')}</p>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4 p-6 relative">
        <div ref={ballRef} id="ball"></div>
        <div ref={cursorTextRef} id="cursor-text"></div>
        <div className="col-span-1 rounded-lg w-full h-full overflow-hidden" onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>
          <Image
            src={projet1}
            alt="projet consultation"
            className="object-cover transition-transform transform-gpu hover:scale-110 duration-500"
            data-cursor-text="Consultation"
          />
        </div>
        <div className="col-span-1 rounded-lg  flex flex-col gap-10 overflow-hidden" onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>
          <Image
            src={projet2}
            alt="projet consultation"
            className=" rounded-lg object-cover transition-transform transform-gpu hover:scale-110 duration-500"
            data-cursor-text="Design"
          />
          <Image
            src={projet3}
            alt="projet consultation"
            className="rounded-lg object-cover transition-transform transform-gpu hover:scale-110 duration-500"
            data-cursor-text="Design"
          />
        </div>
        <div className=" rounded-lg  col-span-1 h-full overflow-hidden" onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>
          <Image
            src={projet4}
            alt="projet consultation"
            className=" object-cover transition-transform transform-gpu hover:scale-110 duration-500"
            data-cursor-text="Smartphone"
          />
        </div>
      </div>
    </div>
  );
}
