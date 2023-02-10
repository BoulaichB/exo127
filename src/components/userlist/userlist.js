import React from 'react';
import { User } from './user/user';

export const Userlist = (props) => {
//     Créez un composant UserList qui reçoit une liste de noms d'utilisateurs en tant que props au moment de la création.
// Dans le composant UserList, utilisez un component User pour afficher chaque nom d'utilisateur en passant le nom de l'utilisateur en tant que props à chaque composant User.
// Dans le composant User, affichez le nom de l'utilisateur en utilisant les props passées.
  return (
    <div>
        {props.users.map(newUser => <User name={newUser}/>)}
    </div>
  )
}
