import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";
import Header from "./Header";
import StreamOverview from "./streams/StreamOverview";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamOverview} />
            <Route path="/streams/create" exact component={StreamCreate} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
