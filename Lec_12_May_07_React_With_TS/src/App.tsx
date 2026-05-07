import UserForm from './components/UserForm'
import Wrapper from './components/Wrapper'
import Comp from './components/Comp'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import UserList from './components/UserLIst.tsx';

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/form">FORM</Link> |{" "}
        <Link to="/userlist">User List</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Wrapper> <Comp /></Wrapper>} />
        <Route path="/form" element={<UserForm />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App