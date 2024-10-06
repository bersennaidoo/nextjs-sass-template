import { FC } from "react";
import Link from "next/link";
import NavLink from "@/app/components/DashBoard/NavLink/NavLink";

type TSideNavProps = {};

const SideNav: FC<TSideNavProps> = (props: TSideNavProps) => {
  const {} = props;

  return (
    <div id="" className="container d-flex" data-cy="">
      <div id="" className="" data-cy="">
        <NavLink />
        <div id="" className="container" data-cy=""></div>
        <form>
          <button id="" className="d-flex btn btn-primary btn-md" data-cy="">
            <div id="" className="container" data-cy="">
              Sign Out
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SideNav;
