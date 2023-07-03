import {BrowserRouter,Route,Routes} from "react-router-dom";


const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>MAIN</div>}/>
          <Route path="/login/*" element={<div>LOGIN</div>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;