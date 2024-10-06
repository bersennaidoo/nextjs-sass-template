import { FC } from "react";
import Link from "next/link";
import NavLink from "@/app/components/DashBoard/NavLink/NavLink";

type TSideNavProps = {};

const SideNav: FC<TSideNavProps> = (props: TSideNavProps) => {
  const {} = props;

  return (
    <div className="container mt-3">
        <NavLink />
        <button type="button" className="btn btn-primary btn-lg mt-3 mb-3">Sign Out</button>
    </div>
  );
};

export default SideNav;
