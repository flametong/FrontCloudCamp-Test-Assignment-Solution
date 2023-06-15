import './dist/styles.css'

import { Home } from './pages/Home/Home';
import { Form } from './pages/Form/Form';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RouteEndpoints } from './data/enums';
import { Error404 } from './pages/Error404/Error404';

function App() {
  return (
    <>
      <Routes>
        <Route path={RouteEndpoints.Home} element={<Home />} />
        <Route path={RouteEndpoints.Form} element={<Form />} />
        <Route path={RouteEndpoints.Error404} element={<Error404 />} />
        <Route path="*" element={<Navigate to={RouteEndpoints.Error404} />} />
      </Routes>
    </>
  );
}

export default App;
