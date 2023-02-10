import {Userlist} from './components/userlist/userlist';

function App() {
  let userList = ['Bachir', 'Adil', 'Charlotte', 'Quentin', 'Vittor', 'Kadri', 'Enide', 'Yassine', 'Sebastian', 'Brandon', 'Victor'];
  return (
    <div>
      <Userlist users={userList}/>
    </div>
  );
}

export default App;
