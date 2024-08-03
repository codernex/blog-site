"use client"
import {useEffect, useRef, useState} from "react";
import {useOutSideClick} from "../../../helpers/hooks";
import {FiChevronDown} from "react-icons/fi";
import {useParams, usePathname, useSearchParams} from "next/navigation";

const Dropdown = ({menu, children, right, arrow = true, className, ...rest}) => {
    const ref = useRef()
    const [show, setShow] = useState(false)
    useOutSideClick(ref, () => setShow(false))

    const path = usePathname()
    const params = useSearchParams()
    useEffect(() => {
        setShow(false)
    }, [path, params])

    return (
        <div className={`relative ${className}`} ref={ref} {...rest}>
            <div className="flex items-center gap-x-1.5 py-2" role="button" onClick={() => setShow(!show)}>
                {children}
                {arrow && <FiChevronDown className="text-white"/>}
            </div>
            <ul className={`bg-white absolute py-1 z-10 rounded shadow-sm ${show ? '' : 'hidden'} ${right ? 'end-0' : 'start-0'}`}>
                {typeof menu === 'function' ? menu({show, setShow}) : menu}
            </ul>
        </div>
    )
}

export default Dropdown