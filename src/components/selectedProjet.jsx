import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Title from './Title';

import Image from 'next/image';
import projet1 from '../../public/assets/img/projetSelected1.jpg';
import projet2 from '../../public/assets/img/projetSelected2.jpg';
import projet3 from '../../public/assets/img/projetSelected3.jpg';
import projet4 from '../../public/assets/img/projetSlected4.jpg';

export default function SelectedProjet() {
  const { t } = useTranslation('projet');

  return (
    <div className="flex gap-4 items-center">
      <div className="h-[90vh] w-[25%] border-r-2 border-painterGreyLight flex flex-col gap-4 justify-center p-6 ">
        <Title title={t('projetTitle')} subtitle={t('projetSubtitle')} />
        <p className="text-[1.3em] font-semibold font-Poppins">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Link href="#">
          <p className="underline text-painterOrange text-[1.3em]">{t('btnContact')}</p>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4 p-6">
        <div className="col-span-1 rounded-lg w-full h-full overflow-hidden">
          <Image src={projet1} alt="projet consultation" className="object-cover transition-transform transform-gpu hover:scale-110 duration-500" />
        </div>
        <div className="col-span-1 rounded-lg  flex flex-col gap-10 overflow-hidden">
          <Image
            src={projet2}
            alt="projet consultation"
            className=" rounded-lg object-cover transition-transform transform-gpu hover:scale-110 duration-500"
          />
          <Image
            src={projet3}
            alt="projet consultation"
            className="rounded-lg object-cover transition-transform transform-gpu hover:scale-110 duration-500"
          />
        </div>
        <div className=" rounded-lg  col-span-1 h-full overflow-hidden">
          <Image src={projet4} alt="projet consultation" className=" object-cover transition-transform transform-gpu hover:scale-110 duration-500" />
        </div>
      </div>
    </div>
  );
}
