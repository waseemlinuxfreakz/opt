import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import OTP from "../components/OTP/OTP";
import SelectLanguage from "../components/SelectLanguage/SelectLanguage";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <SelectLanguage></SelectLanguage> },
      { path: "/login", element: <Login></Login> },
      { path: "/otp", element: <OTP></OTP> },
    ],
  },

  {
    path: "*",
    element: <h3>404 not exist</h3>,
  },
]);

export default router;
