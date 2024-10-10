"use client"

import React, { FC } from "react";

const AdminNav: FC = () => {
  return (
    <div className="admin-nav-container">
      <nav className="admin-nav-container__nav">
        <ul className="admin-nav-container__navlist">
          <li className="admin-nav-container__navlist__item">
            <a
              className="admin-nav-container__navlist__link"
              href="/admin/add-product"
            >
              Add Product
            </a>
          </li>
          <li className="admin-nav-container__navlist__item">
            <a
              className="admin-nav-container__navlist__link"
              href="/admin/create-product"
            >
              Create Product
            </a>
          </li>
          <li className="admin-nav-container__navlist__item">
            <a
              className="admin-nav-container__navlist__link"
              href="/admin/delete-product"
            >
              Delete Product
            </a>
          </li>
          <li className="admin-nav-container__navlist__item">
            <a
              className="admin-nav-container__navlist__link"
              href="/admin/list-products"
            >
              List Products
            </a>
          </li>
          <li className="admin-nav-container__navlist__item">
            <a
              className="admin-nav-container__navlist__link"
              href="/admin/update-product"
            >
              Update Product
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminNav;
