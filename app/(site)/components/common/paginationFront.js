// import React from 'react';
// import ReactPaginate from "react-paginate";
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// const PaginationFront = ({ page, total, limit, totalPages, onPageChange, onSizeChange }) => {
    
//     return (
//         <div className="flex flex-wrap justify-between mb-2">


//             <ReactPaginate
//                 breakLabel="..."
//                 previousLabel={<FiChevronLeft />}
//                 disabledLinkClassName="text-gray-300"
//                 previousLinkClassName={`text-sm border border-[#E1B639] font-semibold h-8 flex items-center justify-center w-8 rounded-l`}
//                 nextLinkClassName={`text-sm border border-[#E1B639] font-semibold h-8 flex items-center justify-center w-8 rounded-r`}
//                 pageLinkClassName={`text-sm border border-[#E1B639] mx-1 hover:bg-[#E1B639] hover:!text-white text-[#E1B639] font-semibold h-8 w-8 flex justify-center items-center`}
//                 pageClassName="!mb-3 md:!mb-0"
//                 activeLinkClassName={`bg-[#E1B639] !text-white`}
//                 nextLabel={<FiChevronRight />}
//                 className="flex flex-wrap"
//                 onPageChange={({ selected }) => onPageChange(selected + 1)}
//                 pageRangeDisplayed={3}
//                 pageCount={totalPages || 1}
//                 renderOnZeroPageCount={null}
//             />
//         </div>
//     )
// }

// export default PaginationFront;
import React from 'react';
import ReactPaginate from "react-paginate";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const PaginationFront = ({ page, total, limit, totalPages, onPageChange, onSizeChange }) => {
    
    return (
        <div className="flex flex-wrap justify-between mb-2">
            <ReactPaginate
                breakLabel="..."
                previousLabel={<FiChevronLeft />} // Use FiChevronLeft icon as previous label
                nextLabel={<FiChevronRight />} // Use FiChevronRight icon as next label
                disabledClassName="disabled" // Define disabled style class
                disabledLinkClassName="disabled-link" // Define disabled link style class
                previousLinkClassName={`text-sm border border-[#E1B639] font-semibold h-8 flex items-center justify-center w-8 rounded-l`}
                nextLinkClassName={`text-sm border border-[#E1B639] font-semibold h-8 flex items-center justify-center w-8 rounded-r`}
                pageLinkClassName={`text-sm border border-[#E1B639] mx-1 hover:bg-[#E1B639] hover:!text-white text-[#E1B639] font-semibold h-8 w-8 flex justify-center items-center`}
                pageClassName="!mb-3 md:!mb-0"
                activeLinkClassName={`bg-[#E1B639] !text-white`}
                className="flex flex-wrap"
                onPageChange={({ selected }) => onPageChange(selected)} // Corrected onPageChange function
                pageRangeDisplayed={3}
                pageCount={totalPages || 1}
                renderOnZeroPageCount={null}
            />
        </div>
    )
}

export default PaginationFront;
