import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation('hero');
  return (
    <div>
      <div className="bg-painterGrey/85 relative rounded-full mr-[15vw] w-[30vw] h-[30vw] float-right">
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-painterOrange text-xl text-left font-bold">
          {t('hero:slogan')}
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
