import style from './Login.module.scss';
import { NavLink } from 'react-router-dom';
import { AlternativeHeader } from '../../layouts';


const users = [
  { id: 12, name: 'Utilisateur 12' },
  { id: 18, name: 'Utilisateur 18' }
]

export const Login = () => {
  return (
    <>
      <AlternativeHeader />
      <div className={style.container}>
        <h1 className={style.title}>Connexion</h1>
        <div className={style.links}>
          {users.map(user => (
            <NavLink key={user.id} to={`/user/${user.id}`}>
              {user.name}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}
