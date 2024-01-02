import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AfterSchoolCourseRegistraionDetailPage from "./pages/AfterSchoolCourseRegistrationDetailPage";

function Router() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/afterSchoolCourseRegistraionDetail" element={<AfterSchoolCourseRegistraionDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;