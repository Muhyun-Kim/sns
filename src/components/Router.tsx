import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../Routes/Auth";
import Home from "../Routes/Home";
import Profile from "../Routes/Profile";
import Nav from "./Nav";

interface Props {
  isLoggedIn: boolean;
  userObj: any;
  refreshUser;
}

const AppRouter = ({ isLoggedIn, userObj, refreshUser }: Props) => {
  return (
    <Router>
      {isLoggedIn && <Nav userObj={userObj} />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home userObj={userObj} />} />
            <Route path="/Profile" element={<Profile userObj={userObj} refreshUser={refreshUser} />} />
          </>
        ) : (
          <Route path="*" element={<Auth />} />
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;