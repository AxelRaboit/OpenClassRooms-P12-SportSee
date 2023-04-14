import style from './Main.module.scss';
import { useFetch } from '../../hooks';
import { Greetings } from '../../components';

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
    </div>
  );
}
