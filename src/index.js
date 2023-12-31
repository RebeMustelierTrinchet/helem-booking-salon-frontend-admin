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

const rootElement = document.getElementById("root");
render(
  <Router>
    <Layout>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/comments" element={<CommentsPage />} />
        <Route exact path="/create-comment" element={<CreateCommentPage />} />
      </Routes>
      </Layout>
  </Router>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
