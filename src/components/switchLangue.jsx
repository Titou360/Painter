import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const changeLanguage = (event) => {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang);
  };
  return (
    <div>
      <label htmlFor="langue-select">Langue :</label>

      <select name="langue" id="langue-select" onChange={changeLanguage}>
        <option value="fr">Français</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}
