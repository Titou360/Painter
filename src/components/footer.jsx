import Link from 'next/link';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import ExtraFooter from './extraFooter';

const Footer = () => {
  const footerRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const spans = footerRef.current.querySelectorAll('.custom-el-4');

    spans.forEach((span, index) => {
      gsap.to(span, {
        y: `-${index * 20}px`, // Déplacement vertical négatif en fonction de l'index
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'right 5%',
          end: 'right 50%',
          scrub: 2,
          immediateRender: true
        },
        duration: 4,
        ease: 'none'
      }, 0);
    });
  }, []);

  return (
    <>
      <div class="relative w-full h-screen flex items-center justify-center border-4 border-red-500 border-double">
        <div className="absolute top-0 left-4 text-white" ref={footerRef}>
          <span className="custom-el-4 transform translate-x-58.96"></span>
          <span className="custom-el-4"></span>
          <span className="custom-el-4"></span>
          <span className="custom-el-4"></span>
          <span className="custom-el-4"></span>
          <span className="custom-el-4"></span>
        </div>
        <div className="absolute bottom-0 right-10 text-white">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="w-3/5 mx-auto border-4 border-green-500 border-double font-Poppins">
          <div className="w-full mr-10 border-4 border-blue-500 border-double mb-8">
            <h2 className="text-4xl ml-5 mr-10 text-white">Ready to take Action ?</h2>
          </div>
          <div className="w-full flex flex-row justify-between items-start mb-4 mr-10 border-4 border-pink-500 border-double">
            <div className="w-1/3 ml-5 flex-shrink-0 text-left items-center text-white">
              <h3 className="text-[1.4em] text-painterGreyLight mb-4 font-medium">Let&apos;s Talk</h3>
              <ul>
                <li className="text-[1.5em]">0800 256 256</li>
                <li className="text-[1.5em]">clement@domaine.com</li>
              </ul>
            </div>
            <div className="w-1/4 flex-shrink-0 text-left text-white text-[0.8em]">
              <h3 className="text-[1.4em] text-painterGreyLight mb-4 font-medium">Our services</h3>
              <ul className="list-disc ml-4">
                <li>
                  <Link href="#">Web Developpement</Link>
                </li>
                <li>
                  <Link href="#">Marketing</Link>
                </li>
                <li>
                  <Link href="#">Web Developpement</Link>
                </li>
                <li>
                  <Link href="#">Marketing</Link>
                </li>
                <li>
                  <Link href="#">Web Developpement</Link>
                </li>
                <li>
                  <Link href="#">Marketing</Link>
                </li>
              </ul>
            </div>
            <div className="w-1/4 flex-shrink-0 text-left text-white text-[0.8em]">
              <h3 className="text-[1.4em] text-painterGreyLight mb-4 font-medium">Our Location</h3>
              <address>
                12345 Porto Blvd. <br />
                Suite 1500 <br />
                Los Angeles, California 90000
              </address>
            </div>
          </div>
          <div className="w-full border-4 border-purple-500 border-double">
            <ExtraFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
