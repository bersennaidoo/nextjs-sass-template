"use client";

import React, { FC } from "react";

const ProductCatalogNav: FC = () => {
  return (
    <div className="admin-nav">
      <nav className="nav flex-column">
        <a className="nav-link active" aria-current="page" href="/product-catalog">
          Overview
        </a>
        <a className="nav-link" href="/product-catalog/product-list">
          Product List
        </a>
        <a className="nav-link" href="/product-catalog/product-detail">
          Product Detail
        </a>
      </nav>
    </div>
  );
};

export default ProductCatalogNav;
