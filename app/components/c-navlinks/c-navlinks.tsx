"use client"

import Link from "next/link"
import {FaUserCircle, FaHome, FaCalculator, FaPersonBooth} from "react-icons/fa"

const links = [
    { name: 'Home', href: '/dashboard', icon: FaHome },
    {
      name: 'Invoices',
      href: '/dashboard/invoices',
      icon: FaCalculator,
    },
    { name: 'Customers', href: '/dashboard/customers', icon: FaPersonBooth },
  ];

const CNavLink = () => {
    return (
        <div className="c-navlink">
            {links.map((link) => {
                const LinkIcon = link.icon 
                return (
                    <Link
                       key={link.name}
                       href={link.href}
                       className="c-navlink__list"
                    >
                        <p className="c-navlink__name">{<LinkIcon />} {link.name}</p>
                    </Link>
                )
            })}
        </div>
    )
}

export default CNavLink