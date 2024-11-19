import CCard from "@/app/components/c-card/c-card"

const CCardWrapper = () => {
    return (
        <div className="c-card-wrapper">
            <CCard title="Collected" value="totalPaid" type="collected" />
            <CCard title="Collected" value="totalPaid" type="pending" />
            <CCard title="Collected" value="totalPaid" type="invoices" />
        </div>
    )
}

export default CCardWrapper