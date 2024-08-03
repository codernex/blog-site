import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const CustomPagination = ({ data, setData }) => {
    return (
        <div className="flex items-center">
            <button onClick={() => setData({ page: data?.page - 1 })} disabled={data?.page === 1} className={`text-sm border border-[#E1B639] font-semibold h-8 flex items-center justify-center w-8 rounded-l ${data?.page === 1 ? '' : 'hover:bg-[#E1B639] hover:text-white'}`}><FiChevronLeft /> </button>
            <div className="flex">
                {
                    Array.from({ length: data?.totalPages }, (_, i) => <div onClick={() => setData({ page: i + 1 })} key={i} className={`cursor-pointer text-sm border border-[#E1B639] mx-1 hover:bg-[#E1B639] hover:!text-white text-[#E1B639] font-semibold h-8 w-8 flex justify-center items-center ${data?.page === i + 1 ? "bg-[#E1B639] !text-white" : ""}`}>
                        <h>{i + 1}</h>
                    </div>)
                }
            </div>
            <button onClick={() => setData({ page: data?.page + 1 })} disabled={data?.page === data?.totalPages} className={`text-sm border border-[#E1B639] font-semibold h-8 flex items-center justify-center w-8 rounded-r ${data?.page === data?.totalPages ? '' : 'hover:bg-[#E1B639] hover:text-white'}`} > <FiChevronRight /></button>
        </div>
    )
}

export default CustomPagination