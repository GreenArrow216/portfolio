import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home/home";
import Header from "./components/Header/header";
import "./App.css";
import RainEffect from "./components/RainEffect/rainEffect";
import About from "./pages/About/about";

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
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RainEffect />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
