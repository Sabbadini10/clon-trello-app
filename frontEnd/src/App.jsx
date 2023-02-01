import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RecoverPassword from "../pages/RecoverPassword";
import ForgetPassword from "../pages/ForgetPassword";
import ConfirmAccount from "../pages/ConfirmAccount";
import { AuthLayout } from "../layout/AuthLayout";

function App() {
  return (
    <div className="App bg-opacity-75">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgetPassword" element={<ForgetPassword />} />
            <Route
              path="/recover-password/:token"
              element={<RecoverPassword />}
            />
            <Route path="/confirm/:token" element={<ConfirmAccount />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
