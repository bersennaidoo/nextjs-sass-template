"use client";

import React, { FC } from "react";

const ProductsNav: FC = () => {
  return (
    <div className="admin-container">
      <div className="admin-container__nav">
        <nav className="nav flex-column">
          <a className="nav-link active" aria-current="page" href="/products">
            Overview
          </a>
          <a className="nav-link" href="/products/product-list">
            Product List
          </a>
        </nav>
      </div>
    </div>
  );
};

export default ProductsNav;
