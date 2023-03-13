import "./topbar.scss";
import { useRef, useEffect, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PersonIcon from "@mui/icons-material/Person";

export default function Topbar(props) {
  function handleMenuOpenClose() {
    props.setMenuOpen(!props.menuOpen);
  }
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (props.menuOpen && ref.current && !ref.current.contains(e.target)) {
        props.setMenuOpen(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [props.menuOpen]);

  return (
    <div className={"topbar " + (props.menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#home" className="logo">
            <CameraAltIcon className="cameraIcon" />
            Ashley.
          </a>

          <div className="itemcontainer">
            <PersonIcon className="icon" />
            <span>(803)415-6431</span>
          </div>
          <div className="itemcontainer">
            <EmailIcon className="icon" />
            <span>karkoub.ashley@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={handleMenuOpenClose} ref={ref}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
