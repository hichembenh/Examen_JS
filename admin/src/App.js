import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Login from "./pages/login/Login";
import {useSelector} from "react-redux";
import Index from "./pages";

function App() {
    // const admin = useSelector((state) => state.user.currentUser.isAdmin);
    const isLogin = localStorage.getItem('profile')
    console.log(isLogin)
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/">
                        {isLogin ?( <Index/> ): (<Login/>)}
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;

