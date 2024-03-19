import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation('header');
  return (
    <div>
      <p className="font-bold text-red-500 ">{t('hourly')}</p>
    </div>
  );
}
