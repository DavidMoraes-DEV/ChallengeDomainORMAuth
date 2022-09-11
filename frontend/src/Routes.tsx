import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./pages/home"


const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;