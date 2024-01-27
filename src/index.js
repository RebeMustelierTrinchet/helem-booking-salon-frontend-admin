import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./pages/landing-page/LandingPage"
import CommentsPage from "./pages/comments-page/CommentsPage"
import Layout from "./components/layouts/Layout"
import CreateCommentPage from "./pages/create-comment-page/CreateCommentPage"
import AppointmentsPage from "./pages/appointments-page/AppointmentsPage"
import CreateAppointmentPage from "./pages/create-appointment-page/createAppointmentPage"
import AppointmentEditPage from "./pages/appointment-edit-page/AppoimentEditPage";
import { Auth0Provider } from '@auth0/auth0-react';


const AUTH0Domain = process.env.REACT_APP_AUTH0_DOMAIN
const AUTH0ID = process.env.REACT_APP_AUTH0_CLIENTID


const rootElement = document.getElementById("root");
render(
  <Router>
     <Auth0Provider
      domain={AUTH0Domain}
      clientId={AUTH0ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
    <Layout>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/comments" element={<CommentsPage />} />
        <Route exact path="/create-comment" element={<CreateCommentPage />} />
        <Route exact path="/appointments" element={<AppointmentsPage />} />
        <Route exact path="/create-appointment" element={<CreateAppointmentPage />} />
        <Route exact path="/edit-appointment/:appointmentID" element={<AppointmentEditPage />} />
      </Routes>
      </Layout>
      </Auth0Provider>
  </Router>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
