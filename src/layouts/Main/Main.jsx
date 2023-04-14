import style from './Main.module.scss';
import { useFetch } from '../../hooks';
import { Greetings, NutriCard } from '../../components';

// icons
import { ReactComponent as FireIcon } from '../../assets/nutritionCardIcons/fire-icon.svg';
import { ReactComponent as AppleIcon } from '../../assets/nutritionCardIcons/apple-icon.svg';
import { ReactComponent as ChickenIcon } from '../../assets/nutritionCardIcons/chicken-icon.svg';
import { ReactComponent as BurgerIcon } from '../../assets/nutritionCardIcons/burger-icon.svg';

export const Main = () => {
  const { data, loading, error } = useFetch();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data...</div>;
  }

  console.log(data, 'data :)');

  return (
    <div className={style.container}>
      <Greetings name={data.nameDisplay} />
      <div className={style.mainWrap}>
      <div className={style.cardWrap}>
          <NutriCard value={data.calories} nutrition="Calories">
            <FireIcon width={45} />
          </NutriCard>
          <NutriCard value={data.protein} nutrition="Proteins">
            <ChickenIcon width={45} />
          </NutriCard>
          <NutriCard value={data.carbo} nutrition="Glucides">
            <AppleIcon width={45} />
          </NutriCard>
          <NutriCard value={data.lipid} nutrition="Lipides">
            <BurgerIcon width={45} />
          </NutriCard>
        </div>
      </div>
    </div>
  );
}
