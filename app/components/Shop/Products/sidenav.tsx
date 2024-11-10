"use client"

import Link from "next/link"
import NavLinks from "@/app/components/Shop/Products/nav-links"
import { FaAmazon } from "react-icons/fa"

import React, { useEffect, useState, FC } from "react"

type TSideNavProps = {}

const SideNav: FC<TSideNavProps> = (props: TSideNavProps) => {

    const {} = props

    return (
        <div className="col-sm-12 col-md-4 c-admin-sidenav">
               <div className="c-admin-sidenav__navigation">
                  <NavLinks />
               </div>
        </div>
    )
}

export default SideNav