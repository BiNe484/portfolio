import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Profile from './pages/Profile';
import Test from './pages/Test';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout dùng chung */}
        <Route element={<MainLayout />}>

          <Route path="/" element={<Profile />} />
          {/*<Route path="/about" element={<About />} />*/}
          <Route path="/test" element={<Test />} />
          
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
