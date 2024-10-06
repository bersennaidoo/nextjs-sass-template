import { FC } from "react"
import SideNav from "@/app/components/DashBoard/SideNav/SideNav"

type TDashboardLayout = {
    children: React.ReactNode
}

const DashboardLayout: FC<TDashboardLayout> = (props: TDashboardLayout) => {

    const { children } = props

    return (
        <div id="dashboard-layout" className="container" data-cy="dashboard">
            <div id="" className="container" data-cy="">
                <SideNav />
            </div>
            <div id="" className="container" data-cy="">{children}</div>
        </div>
    )
}

export default DashboardLayout