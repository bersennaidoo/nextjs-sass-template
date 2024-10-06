"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Invoices", href: "/dashboard/invoices" },
  { name: "Customers", href: "/dashboard/customers" },
];

type TNavLinkProps = {};

const NavLink: FC<TNavLinkProps> = (props: TNavLinkProps) => {
  const {} = props;
  return (
    <nav className="nav flex-column bg-primary-300">
      {links.map((link) => (
        <Link key={link.name} href={link.href} className="nav-link">
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavLink;
