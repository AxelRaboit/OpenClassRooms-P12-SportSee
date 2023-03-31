import style from './Main.module.scss';
import { useFetch } from '../../hooks';

export const Main = () => {
  const { data, loading } = useFetch('api');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data...</div>;
  }

  console.log(data);

  return (
    <></>
  );
}
