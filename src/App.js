import { Route, Switch } from "react-router";
import Landing from "./components/Landing ";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Shop from "./components/Shop";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/shop" component={Shop}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
      </Switch>
    </div>
  );
}

export default App;
