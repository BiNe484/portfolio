// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import TestLayout from './layouts/TestLayout';
import NotFound from './components/NotFound';
import Profile from './pages/Profile';
import Test from './pages/Test';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* layout chính */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Profile />} />
        </Route>

        {/* layout test */}
        <Route element={<TestLayout />}>
          <Route path="/test" element={<Test />} />
        </Route>

        {/* NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}