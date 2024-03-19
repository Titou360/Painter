import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import about from '../../public/assets/img/about.jpg';

export default function About() {
  const { t } = useTranslation('about');
  return (
    <div>
      <section>
        <h1>{t('aboutTitle')}</h1>
        <h2>{t('aboutSubtitle')}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit magna, consectetur at suscipit eu, dapibus vel odio. Mauris ac nulla at
          ligula interdum ullamcorper.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit magna, consectetur at suscipit eu, dapibus vel odio. Mauris ac nulla at
          ligula interdum ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit magna, consectetur at suscipit eu, dapibus
          vel odio. Mauris ac nulla at ligula interdum ullamcorper.
        </p>
      </section>
      <Image src={about} alt="mise en scene bureau" />
    </div>
  );
}
