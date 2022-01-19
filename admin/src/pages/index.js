import Sidebar from "../components/sidebar/Sidebar";
import Home from "./home/Home";
import UserList from "./userList/UserList";
import User from "./user/User";
import NewUser from "./newUser/NewUser";
import ProductList from "./productList/ProductList";
import Product from "./product/Product";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Topbar from "../components/topbar/Topbar";
import NewProduct from "./newProduct/NewProduct";

const Index = () => {
    return (
        <>
            <Topbar/>
            <Router>
                <Switch>
                    <div className="container">
                        <Sidebar/>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/users">
                            <UserList/>
                        </Route>
                        <Route path="/user/:userId">
                            <User/>
                        </Route>
                        <Route path="/newUser">
                            <NewUser/>
                        </Route>
                        <Route path="/products">
                            <ProductList/>
                        </Route>
                        <Route path="/product/:productId">
                            <Product/>
                        </Route>
                        <Route path="/newproduct">
                            <NewProduct/>
                        </Route>
                    </div>
                </Switch>
            </Router>
        </>
    )
}

export default Index