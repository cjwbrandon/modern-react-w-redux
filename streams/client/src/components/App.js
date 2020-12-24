import React from "react";
import { Router, Route } from "react-router-dom";

import history from "../history";
import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

// import {
//   BrowserRouter,
//   HashRouter,
//   MemoryRouter,
//   Route,
//   Link,
// } from "react-router-dom";

// Example of react-router-dom
// const PageOne = () => {
//   return (
//     <div>
//       PageOne
//       {/* Bad Navigation */}
//       <Link to="/pagetwo">Navigate to page 2</Link>
//     </div>
//   );
// };

// const PageTwo = () => {
//   return (
//     <div>
//       PageTwo
//       <Link to="/">Navigate to page 1</Link>
//     </div>
//   );
// };

// exact -> extractedPath === path instead of extractedPath.contains(path)
const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );

  // Browser Router
  // return (
  //   <div>
  //     <BrowserRouter>
  //       <div>
  //         {/* Nested routes -> Can have the same path */}
  //         {/* <Route path="/" exact component={PageOne} /> */}
  //         <Route path="/" exact component={PageOne} />
  //         <Route path="/pagetwo" component={PageTwo} />
  //       </div>
  //     </BrowserRouter>
  //   </div>
  // );
  // Hash Router
  // return (
  //   <div>
  //     <HashRouter>
  //       <div>
  //         {/* Nested routes -> Can have the same path */}
  //         {/* <Route path="/" exact component={PageOne} /> */}
  //         <Route path="/" exact component={PageOne} />
  //         <Route path="/pagetwo" component={PageTwo} />
  //       </div>
  //     </HashRouter>
  //   </div>
  // );
  // Memory Router
  // return (
  //   <div>
  //     <MemoryRouter>
  //       <div>
  //         {/* Nested routes -> Can have the same path */}
  //         {/* <Route path="/" exact component={PageOne} /> */}
  //         <Route path="/" exact component={PageOne} />
  //         <Route path="/pagetwo" component={PageTwo} />
  //       </div>
  //     </MemoryRouter>
  //   </div>
  // );
};

export default App;
