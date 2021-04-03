import { Route, Switch } from "react-router";
import Landing from "./components/Landing ";
import Login from "./components/Login";
import Shop from "./components/Shop";
import Register from "./components/Register";
import Product from "./components/Product";
import Contacto from "./components/Contacto";
import Presentacios from "./components/Presentacios";
import Nosotros from "./components/Nosotros";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/shop" component={Shop}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route path="/product/:id" component={Product}></Route>
        <Route path="/contact" component={Contacto}></Route>
        <Route path="/blog" component={Presentacios}></Route>
        <Route path="/about" component={Nosotros}></Route>
      </Switch>
    </div>
  );
}

export default App;
