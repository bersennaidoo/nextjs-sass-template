"use client";

import React, { FC } from "react";

const ProductCatalogNav: FC = () => {
  return (
    <div className="admin-nav-container">
      <nav className="admin-nav-container__nav">
        <ul className="admin-nav-container__navlist">
          <li className="admin-nav-container__navlist__item">
            <a
              className="admin-nav-container__navlist__link"
              href="/product-catalog/product-list"
            >
              Product List
            </a>
          </li>
          <li className="admin-nav-container__navlist__item">
            <a
              className="admin-nav-container__navlist__link"
              href="/product-catalog/product-detail"
            >
              Product Detail
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProductCatalogNav;
