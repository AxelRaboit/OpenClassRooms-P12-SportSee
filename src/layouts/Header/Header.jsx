import React, { useState, useEffect } from 'react';
import { ReactComponent as Logo } from '../../assets/sportseelogo.svg';
import style from './Header.module.scss';
import { DebugBar } from '../../components';
import { useFetch } from '../../hooks';

export const Header = () => {

  const { dataSource, handleDataSourceChange, apiActivation } = useFetch();
  const [isChecked, setIsChecked] = useState(dataSource === 'Mock Data');

  useEffect(() => {
    setIsChecked(dataSource === 'Mock Data');
  }, [dataSource]);

  return (
    <header>
      <DebugBar apiActivation={apiActivation} dataSource={dataSource} handleDataSourceChange={handleDataSourceChange} />
      <div className={style.container}>
        <div className={style.logoContainer}>
          <Logo width={135} className={style.logo} />
        </div>
        <nav className={style.nav}>
          <ul>
            <li>Accueil</li>
            <li>Profil</li>
            <li>Réglage</li>
            <li>Communauté</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
