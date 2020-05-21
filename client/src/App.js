import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./mediaqueries.css";
// import "./App.css";

import Home from "./pages/Home";

import PastorsMessage from "./pages/who-we-are/meet-the-pastor";
import MissionStatement from "./pages/who-we-are/mission-statement";
import OurHistory from "./pages/who-we-are/our-history";
import OurStaff from "./pages/who-we-are/our-staff";
import WhatIsAmeZionChurch from "./pages/who-we-are/what-is-the-a-m-e-zion-church";

import AdultFamilyLife from "./pages/ministries/adult-family-life";
import ChildrenYoungAdults from "./pages/ministries/children-youth-young-adults";
import Discipleship from "./pages/ministries/discipleship";
import Evangelism from "./pages/ministries/evangelism";
import Men from "./pages/ministries/men";
import PraiseWorship from "./pages/ministries/praise-worship";
import SupportServices from "./pages/ministries/support-services";
import Women from "./pages/ministries/women";

import NewsLetter from "./pages/media-resources/news-letter";
import NewsLetterApr2019 from "./pages/media-resources/news-letters/april-sept2019";
import PhotoGallery from "./pages/media-resources/photo-gallery";
import WatchOnline from "./pages/media-resources/watch-online";

import ContactUs from "./pages/get-connected/contact-us";
import Members from "./pages/get-connected/members";
import OnlineGiving from "./pages/get-connected/online-giving";
import Visitors from "./pages/get-connected/visitors";

import Events from "./pages/events/event-flyers";

import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Register from "./components/auth/Register";
import EditUsers from "./pages/admin/Users/edit-users";

import Calendar from "./pages/events/calendar";

import PrivateRoute from "./components/routing/PrivateRoute";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path="/" component={Home} />
          <Switch>
            {/* WHO WE ARE */}
            <Route
              exact
              path="/who-we-are/meet-the-pastor"
              component={PastorsMessage}
            />
            <Route
              exact
              path="/who-we-are/mission-statement"
              component={MissionStatement}
            />
            <Route
              exact
              path="/who-we-are/our-history"
              component={OurHistory}
            />
            <Route exact path="/who-we-are/our-staff" component={OurStaff} />
            <Route
              exact
              path="/who-we-are/what-is-the-a-m-e-zion-church"
              component={WhatIsAmeZionChurch}
            />
            {/* MINISTRIES */}
            <Route
              exact
              path="/ministries/adult-family-life"
              component={AdultFamilyLife}
            />
            <Route
              exact
              path="/ministries/children-youth-young-adults"
              component={ChildrenYoungAdults}
            />
            <Route
              exact
              path="/ministries/discipleship"
              component={Discipleship}
            />
            <Route exact path="/ministries/evangelism" component={Evangelism} />
            <Route exact path="/ministries/men" component={Men} />
            <Route
              exact
              path="/ministries/praise-worship"
              component={PraiseWorship}
            />
            <Route
              exact
              path="/ministries/support-services"
              component={SupportServices}
            />
            <Route exact path="/ministries/women" component={Women} />
            {/* MEDIA RESOURCES */}
            <Route
              exact
              path="/media-resources/news-letter"
              component={NewsLetter}
            />
            <Route
              exact
              path="/media-resources/news-letters/april-sept2019"
              component={NewsLetterApr2019}
            />
            <Route
              exact
              path="/media-resources/photo-gallery"
              component={PhotoGallery}
            />
            <Route
              exact
              path="/media-resources/watch-online"
              component={WatchOnline}
            />
            {/* GET CONNECTED */}
            <Route
              exact
              path="/get-connected/contact-us"
              component={ContactUs}
            />
            <Route exact path="/get-connected/members" component={Members} />
            <Route
              exact
              path="/get-connected/online-giving"
              component={OnlineGiving}
            />
            <Route exact path="/get-connected/visitors" component={Visitors} />

            {/* EVENTS */}
            <Route exact path="/events/event-flyers" component={Events} />
            <Route exact path="/events/calendar" component={Calendar} />

            {/* ADMIN */}
            <Route exact path="/register" component={Register} />
            <Route exact path="/admin" component={Login} />
            <PrivateRoute exact path="/admin/dashboard" component={Dashboard} />
            <PrivateRoute
              exact
              path="/admin/edit-users"
              component={EditUsers}
            />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
