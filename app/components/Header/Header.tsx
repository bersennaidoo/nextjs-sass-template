"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { ButtonDropdown } from "@/app/js/button-dropdown";
import $ from "jquery";
import * as bootstrap from "bootstrap";

const Header = () => {
  const [state, setState] = useState<boolean>(false);

  useEffect(() => {
    ButtonDropdown();
    setState((prev) => {
      return !prev;
    });
  }, []);
  return (
    <div className="c-header">
      <header className="c-header__logo-frame">
        <a className="c-header__logo-link" href="/">
          <img className="c-header__logo" src="/images/logo1.svg" />
        </a>
      </header>
      <nav className="c-header__nav">
        <button
          type="button"
          id="c-header-toggle"
          className="c-header__btn-dropdown"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            className="bi"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            ></path>
          </svg>
        </button>
        <div className="c-header__list-frame">
          <ul className="c-header__list">
            <li className="c-header__list-item">
              <a className="c-header__list-link" href="/">
                Home
              </a>
            </li>
            <li className="c-header__list-item">
              <a className="c-header__list-link" href="/shop">
                Shop
              </a>
            </li>
            <li className="c-header__list-item">
              <a className="c-header__list-link" href="/about">
                About
              </a>
            </li>
            <li className="c-header__list-item">
              <a className="c-header__list-link" href="/contact">
                Contact
              </a>
            </li>
            <form className="c-header__search-form">
              <input
                className="c-header__form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="c-header__search-form-btn" type="submit">
                Search
              </button>
            </form>
          </ul>
        </div>
      </nav>
      <div className="c-header__hero-frame">
        <p className="c-header__hero-text">WISHIING YOU A Magical... FESTIVE SEASON...</p>
      </div>
    </div>
  );
};

export default Header;
