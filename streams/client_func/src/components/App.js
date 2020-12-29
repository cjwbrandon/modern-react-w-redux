import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import StreamOverview from "./streams/StreamOverview";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component={StreamOverview} />
        <Route path="/streams/create" exact component={StreamCreate} />
        <Route path="/streams/delete" exact component={StreamDelete} />
        <Route path="/streams/edit" exact component={StreamEdit} />
      </Router>
    </div>
  );
};

export default App;
