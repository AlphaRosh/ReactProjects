import Clock from "./Components/common/Clock.jsx";
// import Counter from "./Components/Counter.jsx";
// import GitHubUser from "./Components/GitHubUser.jsx";
// import FetchApi from "./Components/FetchApi.jsx";
// import FunctionalThemeContext from "./Components/common/Theme/FunctionalThemeContext";
// import { ThemeProvider } from "./Components/common/Theme/ThemeContext.jsx";
import SignUp from "./Components/common/Auth/SignUp.jsx";
import LogIn from "./Components/common/Auth/LogIn.jsx";
import ForgotPassword from "./Components/common/Auth/ForgotPassword.jsx";
import UpdateProfile from "./Components/common/Auth/UpdateProfile.jsx";
import Dashboard from "./Components/Home/Dashboard.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ minHeight: "100vh" }}
    >
      <div className='w-100' style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path='/' component={Clock} />
              <Route path='/signup' component={SignUp} />
              <Route path='/login' component={LogIn} />
              <Route path='/forgot-password' component={ForgotPassword} />
              <PrivateRoute path='/dashboard' component={Dashboard} />
              <PrivateRoute path='/update-profile' component={UpdateProfile} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
