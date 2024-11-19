import { FaHome } from "react-icons/fa"

const iconMap = {
    collected: FaHome,
    customers: FaHome,
    pending: FaHome,
    invoices: FaHome,
  };

const CCard = ({
    title,
    value,
    type,
  }: {
    title: string;
    value: number | string;
    type: 'invoices' | 'customers' | 'pending' | 'collected';
  }) => {
    const Icon = iconMap[type]
    return (
      <div className="c-card">
        <div className="c-card_heading">
          <h3 className="ml-2 text-sm font-medium"><Icon /> {title}</h3>
        </div>
        <p
          className="c-card__body"
        >
          {value}
        </p>
      </div>
    );
  }
  

export default CCard