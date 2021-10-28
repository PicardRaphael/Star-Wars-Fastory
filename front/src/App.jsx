import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

const App = ({ routes }) => {
  console.log(routes);
  return (
    <React.Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.key}
            exact={route.exact}
            path={route.path}
            render={(props) => {
              const Component = React.lazy(() =>
                import(`./views/containers/${route.component}Container`)
              );
              return <Component {...props} />;
            }}
          />
        ))}
      </Switch>
    </React.Suspense>
  );
};

App.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      exact: PropTypes.bool,
      component: PropTypes.string.isRequired,
    })
  ),
};

export default App;
