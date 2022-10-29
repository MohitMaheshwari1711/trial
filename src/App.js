import React, { Suspense } from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";

const Home = React.lazy(() => import("./components/Home/Home"));
const PostShare = React.lazy(() => import("./components/PostShare/PostShare"));
const SuccessScreen = React.lazy(() =>
  import("./components/SuccessScreen/SuccessScreen")
);
const ErrorScreen = React.lazy(() =>
  import("./components/ErrorScreen/ErrorScreen")
);
const WaitingScreen = React.lazy(() =>
  import("./components/WaitingScreen/WaitingScreen")
);

// $col-1: $col;
// $col-2: calc(calc(calc(100vw - 72px) / 6 * 2) + 8px);
// $col-3: calc(calc(calc(100vw - 72px) / 6 * 3) + 16px);
// $col-4: calc(calc(calc(100vw - 72px) / 6 * 4) + 24px);
// $col-5: calc(calc(calc(100vw - 72px) / 6 * 5) + 32px);
// $col-6: calc(calc(calc(100vw - 72px) / 6 * 6) + 40px);

const App = () => {

  React.useEffect(() => {

  }, [])

  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/waiting/:url" component={WaitingScreen} />
          <Route path="/error" component={ErrorScreen} />
          <Route path="/success" component={SuccessScreen} />
          <Route path="/share-post" exact component={PostShare} />
          <Route path="/" component={Home} />
        </Switch>
    </Suspense>
  );
};

export default App;
