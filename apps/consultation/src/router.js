import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import PiwikReactRouter from "piwik-react-router";

import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Helmet from "./components/Helmet";

import Home from "./scenes/Home";
import Search from "./scenes/search/Search";
import Opendata from "./scenes/Opendata";
import Notice from "./scenes/notices/Notice";
import Museo from "./scenes/Museo";
import Topics from "./scenes/Topics";

import ScrollToTop from "./components/ScrollToTop";


const piwik = PiwikReactRouter({
  url: "https://stats.data.gouv.fr",
  siteId: 63
});
piwik.push([
  "setDomains",
  ["*.pop.beta.gouv", "*.pop.culture.gouv.fr", "*.production.pop.beta.gouv.fr"]
]);

export default class PublicRoutes extends React.Component {
  render() {
    return (
      <ConnectedRouter history={piwik.connectToHistory(this.props.history)}>
        <div className="main">
          <Helmet
            title="POP - Plateforme Ouverte du Patrimoine"
            description="POP propose de faire des données patrimoniales un bien commun dont il sera aussi simple de se servir que d’y contribuer."
          />
          <ScrollToTop />
          <Header />
          <ErrorBoundary>
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route path={"/search"} component={Search} />
              <Route exact path={"/opendata"} component={Opendata} />
              <Route exact path={"/topics"} component={Topics} />
              <Route path={"/notice/:ref"} component={Notice} />
              <Route path={"/museo/:ref"} component={Museo} />
              <Route component={NotFound} />
            </Switch>
          </ErrorBoundary>
          <Footer />
        </div>
      </ConnectedRouter>
    );
  }
}
