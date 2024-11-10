"use client"

import React, { useEffect, useState, FC } from "react"
import { usePathname } from "next/navigation"
import { FaAmazon, FaPlusCircle } from "react-icons/fa"
import Link from "next/link"

import $ from "jquery"
import bootstrap from "bootstrap"
import "jquery-ui-dist/jquery-ui"

type TNavLinksProps = {}

const links = [
    { name: "AddProduct", href: "/admin/add-product" },
    { name: "ListProducts", href: "/admin/list-products" },
]

const NavLinks: FC<TNavLinksProps> = (props: TNavLinksProps) => {

    const {} = props
    const pathname = usePathname()
    return (
        <div className="col-sm-12 row ms-2">
        { links.map((link) => {
            return (
                <Link
                   id="admin-sidenav"
                   key={link.name}
                   href={link.href}
                   className="col-sm-12 text-decoration-none border rounded bg-primary text-white p-1 pt-3 row c-admin-sidenav"
                >
                    <FaPlusCircle className="col-sm-12 col-md-2"/>
                    <p className="col-sm-12 col-md-10 c-admin-sidenav__link-name">{link.name}</p>
                </Link>
            )
        })}
        </div>
    )
}

export default NavLinks