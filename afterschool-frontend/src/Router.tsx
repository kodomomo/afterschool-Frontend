import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AfterSchoolCourseRegistraionDetailPage from "./pages/AfterSchoolCourseRegistrationDetailPage";
import AfterSchoolCourseRegistrationPage from "./pages/AfterSchoolCourseRegistrationPage";

function Router() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/afterSchoolCourseRegistration" element={<AfterSchoolCourseRegistrationPage />} />
        <Route path="/afterSchoolCourseRegistraionDetail" element={<AfterSchoolCourseRegistraionDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;