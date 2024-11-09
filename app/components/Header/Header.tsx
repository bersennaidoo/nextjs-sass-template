"use client";
import React, {useEffect, useState } from "react"
import $ from "jquery"
import * as bootstrap from "bootstrap"

const Header = () => {

  const [state, setState] = useState<boolean>(false)

  useEffect(() => {
    $("#navbarDropdown").on("click", function() {
      var d = $("#navbarDropdown")
      var dc = new bootstrap.Dropdown(d as any)
      dc.toggle()
    })
    $("#buttonHamburger").on("click", function() {
      var ns = $("#navbarSupportedContent")
      var c = new bootstrap.Collapse(ns as any)
      c.toggle()
    })
    setState((prev) => {
      return !prev
    })
  }, [])
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            OOO
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
                    <a className="dropdown-item" href="/admin">
                      Admin
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/products">
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
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
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
