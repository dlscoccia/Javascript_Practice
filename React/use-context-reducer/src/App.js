import './App.css';
import Profile from './components/Profile';
import UserList from './components/UserList';
import UserState from './context/users/userState';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <UserState>
      <UserList />
      <Profile />
    </UserState>
  );
}

export default App;
