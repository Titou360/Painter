import { useTranslation } from 'react-i18next';
import SocialIconBar from './socialIconBar';

const ExtraFooter = () => {
  const { t } = useTranslation('extraFooter');

  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-row justify-between my-5 ml-5 mr-10">
      <div>
        <p className="text-white dark:text-painterDark">
          © {t('extraFooter:copyrights')} {currentYear}. {t('extraFooter:rights')}
        </p>
      </div>

      <div>
        <SocialIconBar />
      </div>
    </div>
  );
};

export default ExtraFooter;
