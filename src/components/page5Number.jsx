import { useTranslation } from 'react-i18next';

const Table = ({ number, text }) => {
  return (
    <div className="flex flex-col gap-4 items-center ">
      <p className="text-[2.75em] text-white dark:text-black">{number}</p>
      <p className="text-[18px] text-painterGreyLight dark:text-black">{text}</p>
    </div>
  );
};

export default function Number() {
  const { t } = useTranslation('number');
  return (
    <div className="flex flex-col items-center gap-[5em]">
      <h1 className="text-white dark:text-black text-[3em] mt-10">{t('title')}</h1>
      <section className="grid grid-cols-2 gap-[10em]">
        <Table number="20+" text={t('business')} />
        <Table number="120+" text={t('clients')} />
        <Table number="200+" text={t('score')} />
        <Table number="320+" text={t('coffee')} />
      </section>
    </div>
  );
}
