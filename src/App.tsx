import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header';
import './App.css'

// Layout Component
function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/* Render child routes here */}
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> {/* Home rendered at "/" */}
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;