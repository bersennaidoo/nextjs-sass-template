"use client";

import React, { FC } from "react";

const AdminNav: FC = () => {
  return (
    <div className="admin-container">
      <div className="admin-container__nav">
        <nav className="nav flex-column">
          <a className="nav-link active" aria-current="page" href="/admin">
            Overview
          </a>
          <a className="nav-link" href="/admin/add-product">
            Add Product
          </a>
          <a className="nav-link" href="/admin/list-products">
            List Products
          </a>
        </nav>
      </div>
    </div>
  );
};

export default AdminNav;
