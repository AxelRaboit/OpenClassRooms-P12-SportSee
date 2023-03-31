import { ReactComponent as Logo } from '../../assets/sportseelogo.svg';
import style from './AlternativeHeader.module.scss';

export const AlternativeHeader = () => {
  return (
    <header>
      <div className={style.container}>
        <div className={style.logoContainer}>
          <Logo width={135} className={style.logo} />
        </div>
      </div>
    </header>
  );
}
