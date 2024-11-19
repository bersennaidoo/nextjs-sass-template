"use client"

import { FaHome } from "react-icons/fa"

const Cta = () => {

    return (
        <div className="c-cta">
            <form className="c-cta__form">
                <button className="c-cta__btn">
                    <div className="c-cta__signout"><FaHome /> Sign Out</div>
                </button>
            </form>
        </div>
    )
}

export default Cta