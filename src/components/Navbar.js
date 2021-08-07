import React from "react";
import Logo from "../images/Logo.png";
import ArrowUpSlant from "../images/ArrowUpSlant.png";
import ArrowDown from "../images/ArrowDown.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-custom-classes py-3">
      <a className="navbar-brand" href="#">
        <img src={Logo} alt="" className="logo-nav-main" />
      </a>
      <button
        className="navbar-toggler nav-main-toggle-button"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav nav-item-left">
          {/* <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li> */}

          <div class="dropdown">
            <button
              class="nav-link-button"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              About Us
              <span className="marginleft5 mb-2">
                <img src={ArrowDown} alt="" className="" />
              </span>
            </button>

            <ul
              class="dropdown-menu animate slideIn shadow-lg                "
              aria-labelledby="dropdownMenuLink"
            >
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <div class="dropdown-divider"></div>

              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <div class="dropdown-divider"></div>

              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <button
              class="nav-link-button"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Products
              <span className="marginleft5 mb-2">
                <img src={ArrowDown} alt="" className="" />
              </span>
            </button>

            <ul
              class="dropdown-menu animate slideIn shadow-lg                "
              aria-labelledby="dropdownMenuLink"
            >
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <button
              class="nav-link-button"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Exchange
              <span className="marginleft5 mb-2">
                <img src={ArrowUpSlant} alt="" className="" />
              </span>
            </button>

            <ul
              class="dropdown-menu animate slideIn shadow-lg                "
              aria-labelledby="dropdownMenuLink"
            >
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <button
              class="nav-link-button"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Buy/Sell
              <span className="marginleft5 mb-2">
                <img src={ArrowUpSlant} alt="" className="" />
              </span>
            </button>

            <ul
              class="dropdown-menu animate slideIn shadow-lg                "
              aria-labelledby="dropdownMenuLink"
            >
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <button
              class="nav-link-button"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Resources
              <span className="marginleft5 mb-2">
                <img src={ArrowDown} alt="" className="" />
              </span>
            </button>

            <ul
              class="dropdown-menu animate slideIn shadow-lg                "
              aria-labelledby="dropdownMenuLink"
            >
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <button
              class="nav-link-button"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Fees
              <span className="marginleft5 mb-2">
                <img src={ArrowUpSlant} alt="" className="" />
              </span>
            </button>

            <ul
              class="dropdown-menu animate slideIn shadow-lg                "
              aria-labelledby="dropdownMenuLink"
            >
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
            </ul>
          </div>
        </ul>

        <button className="nav-top-button" type="submit">
          Login/Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
