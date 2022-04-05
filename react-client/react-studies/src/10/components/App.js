import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";
//import { MemoryRouter, Link, Route } from "react-router-dom";
//import { HashRouter, Link, Route } from "react-router-dom";

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/new" exact component={StreamCreate} />
                        <Route path="/streams/edit/:id" exact component={StreamEdit} />
                        <Route path="/streams/delete/:id" exact component={StreamDelete} />
                        <Route path="/streams/:id" exact component={StreamShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

/*const PageOne = () => {
    return <div>
        Page One
        <Link to="/pageTwo">Navigate to Page Two</Link>
    </div>
}

const PageTwo = () => {
    return <div>
        Page One
        <Link to="/">Navigate to Page One</Link>
    </div>
}*/

/*const App = () => {
    return (
        <div>
            <MemoryRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={PageOne} />
                        <Route path="/pageTwo" exact component={PageTwo} />
                    </Switch>
                </div>
            </MemoryRouter>
        </div>
    );
};*/

/*const App = () => {
    return (
        <div>
            <HashRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={PageOne} />
                        <Route path="/pageTwo" exact component={PageTwo} />
                    </Switch>
                </div>
            </HashRouter>
        </div>
    );
};*/

export default App;