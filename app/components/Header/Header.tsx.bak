"use client";
import React, {useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa"
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
    <header className="c-header">
      <nav className="c-header__nav">
        <h1 className="c-header__logo-frame">
          <img className="c-header__logo" src="/images/185x104.png" />
        </h1>
        <ul className="c-header__list">
          <li className="c-header__item"><a className="c-header__link" href="/">Home</a></li>
          <li className="c-header__item"><a className="c-header__link" href="/shop">Shop</a></li>
          <li className="c-header__item"><a className="c-header__link" href="/about">About</a></li>
          <li className="c-header__item"><a className="c-header__link c-header--right" href="/contact">Contact</a></li>
        </ul>
        <form className="c-header__form">
          <input className="c-header__input" type="text" placeholder="search" /><FaSearch />
        </form>
      </nav>
    </header>
  );
};

export default Header;
