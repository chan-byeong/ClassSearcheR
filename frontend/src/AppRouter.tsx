import {BrowserRouter,Route,Routes} from "react-router-dom";
import LoginPage from './pages/LoginPage'
import MainPage from "./pages/MainPage";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/login/*" element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;