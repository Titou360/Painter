import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
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
      <div ref={slider} className="container">
        <div className="description panel blue">
          <div>
            SCROLL DOWN
            <div className="scroll-down"></div>
          </div>
        </div>
        <div className="panel red">ONE</div>
        <div className="panel orange">
          <p>TEST page 2</p>
        </div>
        <div className="panel purple">THREE</div>
        <div className="panel red">
          <p>FOUR</p>
        </div>
      </div>
    </div>
  );
}
