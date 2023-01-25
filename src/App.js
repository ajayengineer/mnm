import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { Header, Home, About, Contact, ErrorPage, UserProfile, Profile, Settings } from './RouteMixing';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Outlet />
        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="about" element={<About />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="home" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="userprofile" element={<UserProfile />} >
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
