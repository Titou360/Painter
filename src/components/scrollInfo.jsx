import { useTranslation } from 'react-i18next';

const ScrollInfo = () => {
    const { t } = useTranslation('scrollInfo');
  return (
    <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 -rotate-90 flex flex-row" style={{ transformOrigin: 'center' }}>
      <span className="text-white text-lg font-bold mr-3 animate-bounce">↓ </span>
      <p className="text-white">{t('scrollInfo:scroll')}</p>
      <span className="text-white text-lg font-bold ml-3 animate-bounce">↓ </span>
    </div>
  );
};

export default ScrollInfo;
