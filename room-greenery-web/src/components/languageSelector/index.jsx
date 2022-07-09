import React, { useState } from 'react';
import { GB, UA } from 'country-flag-icons/react/3x2';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';

const Flags = () => {
  // eslint-disable-next-line no-undef
  const { t, i18n } = useTranslation();
  // eslint-disable-next-line no-undef
  const active = localStorage.getItem('lang');
  const [lang, setLang] = useState();
  const classes = useStyles();

  const handleClick = async (event) => {
    const newLang = event.currentTarget.id;

    await i18n.changeLanguage(newLang);
    // eslint-disable-next-line no-undef
    await localStorage.setItem('lang', newLang);
    setLang(newLang);
  };

  const displayedFlag = () => {
    switch (lang) {
      case 'en':
        return (<GB title="en" id="ua" className={classes.image} onClick={handleClick} />);
      case 'ua':
        return (<UA title="ua" id="en" className={classes.image} onClick={handleClick} />);
      default:
        return (<UA title="ua" id="en" className={classes.image} onClick={handleClick} />);
    }
  };

  return (
    <div className={classes.container}>
      {displayedFlag()}
    </div>
  );
};

export default Flags;
