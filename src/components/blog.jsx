import Link from 'next/link';
import Title from './title';

import { useTranslation } from 'react-i18next';

const Table = () => {
  return (
    <div className="flex justify-around w-full  border-dotted border-painterGreyLight border-b-[2px] pb-4">
      <p className="bg-black text-white font-bold pl-2 pr-2 pb-1 pt-1 rounded-xl uppercase text-[0.75em]">Stategy</p>
      <p className="text-[1.2em] font-bold hover:underline cursor-pointer">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Oct 21, 2022</p>
    </div>
  );
};

export default function Blog() {
  const { t } = useTranslation('blog');
  return (
    <div className="flex items-center gap-10 w-[100%] ">
      <section className="h-[90vh] w-[35%] border-r-2 border-painterGreyLight flex flex-col gap-4 justify-center p-6 pl-10 ">
        <Title title={t('blogTitle')} subtitle={t('blogSubtitle')} />
        <p className="text-[1.3em] font-Poppins font-bold text-painterDark">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Link href="#">
          <p className="underline text-painterOrange text-[1.3em]">{t('btnBlog')}</p>
        </Link>
      </section>
      <section className="flex flex-col gap-4 w-full">
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
      </section>
    </div>
  );
}
