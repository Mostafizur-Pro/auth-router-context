import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log("context", user);

  const hangleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link to="/home" className="btn btn-ghost normal-case text-xl">
          Mostafizur
        </Link>
        <Link to="/home" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        <Link to="/login" className="btn btn-ghost normal-case text-xl">
          Login
        </Link>
        <Link to="/register" className="btn btn-ghost normal-case text-xl">
          Register
        </Link>
        {user?.email && <span>Welcome, {user.email}</span>}
        <button onClick={hangleSignOut} className="btn ml-5 btn-sm">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
