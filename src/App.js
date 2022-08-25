import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import { isAuth } from "../src/Utils/Common";
import Navbar from "./components/navbar/navbar";
import Agenda from "./components/agenda/Agenda";
import ListCollaborateur from "./pages/collaborateur/ListCollaborateur";
import Dashboard from "./pages/dashboard/Dashboard";
import useStyles from "./style";

const App = () => {
  const classes = useStyles();
  if (isAuth()) {
    return (
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <Navbar />
      <Agenda />
      <div className="app-content overflow-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/list-collaborateur" element={<ListCollaborateur />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
