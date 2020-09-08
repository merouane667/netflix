import React from 'react';
import './nav.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from "react-toastify";
import Axios from "axios";

toast.configure();
const Nav = (props) => {
  const [show, handleShow] = useState(false);

  const logOut = () => {
    localStorage.removeItem("token");
    toast.warn("You Are Successfully Logout");
    setTimeout(function () {
      window.location.href = "/";
    }, 1000);
  };


    if (!localStorage.getItem("token")) {
      setTimeout(function () {
        props.history.push("/");
      }, 1000);
    }


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src="/logo.png" alt="Netflix logo" />
      <img
        className={`nav_avatar ${show && "nav_avatar_black"}`}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/OOjs_UI_icon_logOut-ltr.svg/1200px-OOjs_UI_icon_logOut-ltr.svg.png"
        alt="Netflix avatar"
        onClick={() => logOut()}
      />
    </div>
  );
};

export default Nav;
