import Header from "../components/Header";
import Footer from "../components/Footer";
import ToTop from "../components/ui/ToTop";
//import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Header />
      <div className=''>
        <Outlet />   {/* React Router render page */}        
      </div>
      <Footer/>
      <ToTop />
    </>
  );
}
