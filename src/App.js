import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './components/Auth/LoginForm';
import ResumePage from './components/ResumePage/ResumePage';
import EditResumePage from './components/EditResumePage/EditResumePage';
import { RouteConst } from './components/Routes/RouteConst';


function App() {
  return (
    <div>
      <Routes>
        <Route path={RouteConst.RESUME_PAGE} element={<ResumePage />} />
        <Route path={RouteConst.LOGIN_FORM} element={<LoginForm /> } />
        <Route path={RouteConst.EDIT_RESUME} element={<EditResumePage />} />
      </Routes>
    </div>
  );
}

export default App;
