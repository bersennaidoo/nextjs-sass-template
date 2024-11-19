import Link from "next/link"
import CCardWrapper from "@/app/components/c-card-wrapper/c-card-wrapper"

const Dashboard = () => {
    return (
        <main className="c-dashboard">
            <h1 className="c-dashboard__heading">
                Dashboard
            </h1>
            <div className="c-dasboard__card-frame">
                <div className="c-dashboard__card-wrapper">
                    <CCardWrapper />
                </div>
            </div>
            <div className="c-dashboard__revenue-chart-invoices-frame">
                RevenueChart
                LatestInvoices
            </div>
        </main>
    )
}

export default Dashboard