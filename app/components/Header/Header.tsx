"use client";
import React, {useEffect, useState } from "react"
import { FaHome } from "react-icons/fa"
import Link from "next/link"
import $ from "jquery"
import * as bootstrap from "bootstrap"

const Header = () => {

  const [state, setState] = useState<boolean>(false)

  useEffect(() => {
    $("#navbarDropdown").on("click", function() {
      var navbarDropdown = $("#navbarDropdown")
      var dropdown = new bootstrap.Dropdown(navbarDropdown as any)
      dropdown.toggle()
    })
    $("#buttonHamburger").on("click", function() {
      var navbarSupportedContent = $("#navbarSupportedContent")
      var collapse = new bootstrap.Collapse(navbarSupportedContent as any)
      collapse.toggle()
    })
    setState((prev) => {
      return !prev
    })
  }, [])
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <FaHome />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            id="buttonHamburger"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Admin
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
