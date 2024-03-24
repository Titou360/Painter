import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Title from './title';

import imgSEO from '../../public/assets/img/Icons/entreprise.png';
import imgDev from '../../public/assets/img/Icons/puzzle.png';
import imgStrategy from '../../public/assets/img/Icons/strategy.png';
import imgMarketing from '../../public/assets/img/Icons/tactile.png';

const Column = ({ img, title }) => {
  const { t } = useTranslation('expertise');
  return (
    <div className="p-2 flex flex-col gap-4">
      <Image src={img} alt={title} height={80} width={80} />
      <h2 className="text-[2em]">{title}</h2>
      <p className="text-[1.2em]">Lorem ipsum dolor sit amet, consec tetur adipiscing elit lorem ipsum dolor sit amet, consectetur.</p>
      <ul>
        <li>{t('list1')}</li>
        <li>{t('list2')}</li>
        <li>{t('list3')}</li>
        <li>{t('list4')}</li>
      </ul>
    </div>
  );
};

export default function Expertise() {
  const { t } = useTranslation('expertise');
  return (
    <div className="flex gap-4 items-center text-white">
      <div className="h-[90vh] w-[25%] border-r-[1px] border-painterGreyLight flex flex-col gap-4 justify-center p-6 ">
        <Title title={t('title')} subtitle={t('subtitle')} />
        <p className="text-[1.3em] font-semibold font-Poppins ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Link href="#">
          <p className="underline text-white text-[1.3em]">{t('btnContact')}</p>
        </Link>
      </div>
      <section className="flex gap-4 w-[90%]">
        <Column img={imgStrategy} title={t('titleStrategy')} />
        <Column img={imgDev} title={t('titleDev')} />
        <Column img={imgMarketing} title={t('titleMarketing')} />
        <Column img={imgSEO} title={t('titleSeo')} />
      </section>
    </div>
  );
}
