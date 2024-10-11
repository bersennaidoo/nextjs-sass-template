"use client";

import React, { FC } from "react";

const AdminNav: FC = () => {
  return (
    <div className="admin-nav">
      <nav className="nav flex-column">
        <a className="nav-link active" aria-current="page" href="/admin">
          Overview
        </a>
        <a className="nav-link" href="/admin/add-product">
          Add Product
        </a>
        <a className="nav-link" href="/admin/create-product">
          Create Product
        </a>
        <a className="nav-link" href="/admin/delete-product">
          Delete Product
        </a>
        <a className="nav-link" href="/admin/update-product">
          Update Product
        </a>
        <a className="nav-link" href="/admin/list-products">
          List Products
        </a>
      </nav>
    </div>
  );
};

export default AdminNav;
