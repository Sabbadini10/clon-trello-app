import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import RecoverPassword from "./pages/RecoverPassword";
import ForgetPassword from "./pages/ForgetPassword";
import ConfirmAccount from "./pages/ConfirmAccount";
import { AuthLayout } from "./layout/AuthLayout";
import { AuthProvider } from "./context/AuthProvider";
import { Error404 } from "./pages/Error404";

function App() {
  return (
    <div className="App bg-opacity-75">
      <BrowserRouter>
      <AuthProvider>
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
            <Route path="*" element={<Error404/>} />
          </Route>
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
