"use client";
import Link from "next/link";

const CSideBar = () => {
  return (
    <div className="c-sidebar">
      <Link href={"/dashboard"}>Dashboard</Link>
      <Link href={"/dashboard/customers"}>Customers</Link>
      <Link href={"/dashboard/invoices"}>Invoices</Link>
    </div>
  );
};

export default CSideBar;
