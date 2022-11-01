import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const Home = React.lazy(() => import("../../pages/Home/Home"));
const PostShare = React.lazy(() => import("../../pages/PostShare/PostShare"));
const SuccessScreen = React.lazy(() =>
  import("../../pages/SuccessScreen/SuccessScreen")
);
const ErrorScreen = React.lazy(() =>
  import("../../pages/ErrorScreen/ErrorScreen")
);
const WaitingScreen = React.lazy(() =>
  import("../../pages/WaitingScreen/WaitingScreen")
);

// $col-1: $col;
// $col-2: calc(calc(calc(100vw - 72px) / 6 * 2) + 8px);
// $col-3: calc(calc(calc(100vw - 72px) / 6 * 3) + 16px);
// $col-4: calc(calc(calc(100vw - 72px) / 6 * 4) + 24px);
// $col-5: calc(calc(calc(100vw - 72px) / 6 * 5) + 32px);
// $col-6: calc(calc(calc(100vw - 72px) / 6 * 6) + 40px);

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route
          path="/error/contentId=:contentId"
          exact={true}
          component={ErrorScreen}
        />
        <Route
          path="/success/couponId=:couponId"
          exact={true}
          component={SuccessScreen}
        />
        <Route
          path="/share-post/restaurantId=:restaurantId"
          exact={true}
          component={PostShare}
        />
        <Route
          path="/waiting/contentId=:contentId"
          exact={true}
          component={WaitingScreen}
        />
         <Route
          path="/restaurantId=:restaurantId"
          exact={true}
          component={Home}
        />
         <Route
          path="/"
          exact={true}
          component={Home}
        />
      </Switch>
    </Suspense>
  );
};

export default App;
