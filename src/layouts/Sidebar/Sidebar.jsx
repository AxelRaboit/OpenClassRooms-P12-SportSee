import { ReactComponent as Meditation } from '../../assets/sidemenuIcons/meditation-icon.svg';
import { ReactComponent as Swimming } from '../../assets/sidemenuIcons/swimming-icon.svg';
import { ReactComponent as Bike } from '../../assets/sidemenuIcons/bike-icon.svg';
import { ReactComponent as WeightTrain } from '../../assets/sidemenuIcons/weight-icon.svg';

import style from './Sidebar.module.scss';

export const Sidebar = () => {

  const currentYear = new Date().getFullYear();

  const icons = [
    { icon: Meditation },
    { icon: Swimming },
    { icon: Bike },
    { icon: WeightTrain }
  ]

  return (
    <>
      <aside className={style.sidebar}>
        <nav className={style.nav}>
          {icons.map(({ icon: Icon }, index) => (
              <Icon key={index} className={style.navLinkIcon} />
          ))}
        </nav>
        <footer className={style.footer}>Copiryght, SportSee {currentYear}</footer>
      </aside>
    </>
  );
}
