"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/dashboard" },
  { name: "Invoices", href: "/dashboard/invoices" },
  { name: "Customers", href: "/dashboard/customers" },
];

type TNavLinkProps = {};

const NavLink: FC<TNavLinkProps> = (props: TNavLinkProps) => {
  const {} = props;
  return (
    <div className="">
      {links.map((link) => (
        <Link key={link.name} href={link.href} className="">
          <p className="">{link.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default NavLink;
