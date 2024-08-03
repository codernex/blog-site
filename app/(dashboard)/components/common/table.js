import { FaCheck, FaEye, FaFilter, FaPencilAlt, FaTimes, FaTrashAlt } from "react-icons/fa";
import SearchInput from "../form/search";
import Pagination from "./pagination";
import { Loader } from "./loader";
import { Modal } from "antd";
import { useState } from "react";
import { useActionConfirm } from "../../../helpers/hooks";
import { IoMdArrowDropdown, IoMdArrowUp } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";


const Table = ({
  columns,
  data,
  indexed,
  loading = false,
  noActions,
  actions,
  action,
  onView,
  onEdit,
  onDelete,
  onReload,
  pagination = false,
  shadow = true,
  title,
  noHeader = false,
  afterSearch,
  onSearchChange,
  onCheckbox,
  theme,
  formatter,
}) => {
  const [visibleColumns, setVisibleColumns] = useState(columns?.map(column => column?.dataField));
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const toggleColumnVisibility = (columnDataField) => {
    setVisibleColumns(prevColumns => {
      if (prevColumns.includes(columnDataField)) {
        return prevColumns.filter(col => col !== columnDataField);
      } else {
        return [...prevColumns, columnDataField];
      }
    });
  };

  const [sortOrders, setSortOrders] = useState({});

  const handleSort = (columnDataField) => {
    const sortOrder = sortOrders[columnDataField] === 1 ? -1 : 1;
    setSortOrders({ [columnDataField]: sortOrder });
    onReload({ sort: sortOrder });
  };

  return (
    <>
      <div
        className={`w-full dark:bg-dark_color dark:text-white bg-white text-gray-700'} ${shadow ? "shadow-lg" : ""} rounded-sm mb-4`}
      >
        {noHeader || (
          <header className="px-4 pt-3 pb-2 flex justify-between flex-wrap items-center">
            <div className="flex flex-wrap items-center">
              <SearchInput
                className={`w-44 dark:bg-dark_color dark:text-white text-gray-700 bg-white'} border border-gray-300 rounded-md shadow-sm`}
                onChange={(e) => {
                  onReload({ search: e.target.value || undefined, page: 1 });
                  onSearchChange && onSearchChange(e.target.value || "");
                }}
              />
              {afterSearch}
            </div>
            <div className="flex gap-x-3">
              <div className="relative">
                <button
                  onClick={() => setShowFilterMenu(!showFilterMenu)}
                  className="border border-gray-300 rounded-md shadow-sm p-2 flex items-center focus:outline-none"
                >
                  <FaFilter className="mr-2 dark:text-white text-dark_color" size={20} />
                  Filter
                </button>
                {showFilterMenu && (
                  <div className="absolute right-0 mt-2 w-40 dark:bg-dark_color dark:text-white bg-white shadow-md rounded-md py-2 border border-gray-300 z-10">
                    {columns?.map((column, index) => (
                      <div
                        key={index}
                        className="flex items-center px-4 py-2 cursor-pointer"
                        onClick={() => toggleColumnVisibility(column?.dataField)}
                      >
                        <FaCheck className={`mr-2 ${visibleColumns.includes(column?.dataField) ? 'text-green-500' : 'text-gray-400'}`} size={20} />
                        {column?.text}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {action}
            </div>
          </header>
        )}
        <div className="p-3 relative">
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse">
              <thead className="text-xs font-semibold uppercase dark:bg-dark_color dark:text-white bg-gray-50 text-gray-500">
                <tr>
                  {indexed && (
                    <th className="p-2 whitespace-nowrap border border-gray-200 dark:border-gray-700">
                      <div className="font-semibold text-left">#</div>
                    </th>
                  )}
                  {onCheckbox && (
                    <th className="p-2 whitespace-nowrap border border-gray-200 dark:border-gray-700">
                      <div className="font-semibold text-left">Select</div>
                    </th>
                  )}

                  {columns?.map((column, index) => (
                    visibleColumns.includes(column?.dataField) && (
                      <th className="p-2 whitespace-nowrap text-left border border-gray-200 dark:border-gray-700" key={index}>
                        <div
                          className={`font-semibold flex items-center justify-between ${column?.className || ""}`}
                        >
                          {column?.text}

                          <div className="flex flex-col">
                            <MdKeyboardArrowUp
                              className={`text-dark_color cursor-pointer ${sortOrders[column?.dataField] === 1 ? 'text-green-600 font-bold' : 'text-gray-200 font-bold'}`}
                              onClick={() => handleSort(column?.dataField)}
                            />
                            <MdKeyboardArrowDown
                              className={`text-dark_color cursor-pointer ${sortOrders[column?.dataField] === -1 ? 'text-green-600' : 'text-gray-200'}`}
                              onClick={() => handleSort(column?.dataField)}
                            />
                          </div>
                        </div>
                      </th>
                    )
                  ))}
                  {!noActions && <th className="p-2 whitespace-nowrap text-left border border-gray-200 dark:border-gray-700">Action</th>}
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {loading ? (
                  <tr>
                    <td colSpan={columns.length + (indexed ? 1 : 0) + (!noActions ? 1 : 0)} className="py-4">
                      <div className="flex justify-center">
                        <Loader />
                      </div>
                    </td>
                  </tr>
                ) : (
                  <>
                    {(pagination ? data?.docs : data)?.map((row, index) => (
                      <tr key={index}>
                        {indexed && (
                          <td className="p-2 whitespace-nowrap text-gray-500 border border-gray-200 dark:border-gray-700">
                            {(pagination ? (data?.page - 1) * data.limit : 0) +
                              index +
                              1}
                          </td>
                        )}
                        {onCheckbox && (
                          <td className={`p-2 whitespace-nowrap dark:text-white text-gray-700 border border-gray-200 dark:border-gray-700 ${theme === 'dark' ? 'bg-dark_color' : ''}`}>
                            <input
                              type="checkbox"
                              className={`border border-gray-300 rounded ${theme === 'dark' ? 'bg-dark_color' : ''}`}
                              onChange={() => onCheckbox(row)}
                            />
                          </td>
                        )}

                        {columns?.map((column, index) => (
                          visibleColumns.includes(column?.dataField) && (
                            <td
                              className={`p-2 whitespace-nowrap dark:text-white text-gray-700 ${column?.className || ""
                                } border border-gray-200 dark:border-gray-700`}
                              key={index}
                            >
                              {column?.formatter
                                ? column?.formatter(row[column?.dataField], row)
                                : row[column?.dataField] || "-"}
                            </td>
                          )
                        ))}
                        {!noActions && (
                          <td className="p-2 whitespace-nowrap text-right border border-gray-200 dark:border-gray-700">
                            {actions && actions(row)}
                            <div className="flex gap-2">
                              {onView && (
                                <button
                                  className="btn btn-outline-success btn-sm focus:shadow-none border border-green-700 dark:bg-green-700 dark:text-white text-green-700 p-2 rounded hover:bg-green-700 hover:text-white"
                                  title="View"
                                  onClick={() => onView(row)}
                                >
                                  <FaEye />
                                </button>
                              )}
                              {onEdit && row?.status === 'pending' && (
                                <button
                                  className="border border-indigo-700 text-indigo-700 p-2 rounded hover:bg-indigo-700 hover:text-white focus:shadow-none dark:bg-indigo-700 dark:text-white"
                                  title="Edit"
                                  onClick={() => onEdit(row)}
                                >
                                  <FaPencilAlt size={12} />
                                </button>
                              )}
                              {onDelete && row?.disableDelete !== 1 && (
                                <button
                                  className="border border-red-700 p-2 rounded hover:bg-red-700 text-red-600 hover:text-white focus:shadow-none dark:bg-red-700 dark:text-white"
                                  title="Delete"
                                  onClick={async () => {
                                    await useActionConfirm(
                                      onDelete,
                                      { _id: row._id },
                                      onReload,
                                      "Are you sure you want to delete this item?",
                                      "Yes, Delete"
                                    );
                                  }}
                                >
                                  <FaTrashAlt size={12} />
                                </button>
                              )}
                            </div>
                          </td>
                        )}
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
          {pagination && (
            <div className="pt-3 mt-3">
              <Pagination
                page={data?.page}
                total={data?.totalDocs}
                onSizeChange={(limit) => onReload({ limit })}
                limit={data?.limit}
                totalPages={data?.totalPages}
                onPageChange={(page) => onReload({ page })}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Table;

export const DetailTable = ({ data, columns, title, actions }) => {
  return (
    <div className={`dark:bg-dark_color dark:border-gray-50 dark:text-white bg-white shadow-lg border border-gray-50 rounded-lg overflow-hidden`}>
      {!!title && <div className={`text-3xl font-bold py-4 px-6 text-white`}>{title}</div>}
      <div className="body">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="dark:bg-dark_color dark:border-gray-50 dark:text-white bg-white divide-y divide-gray-200">
              {columns?.map((column, index) => (
                <tr key={index} className="dark:bg-dark_color dark:text-gray-200 bg-white hover:bg-gray-50 transition duration-150">
                  <td className="py-4 px-6 font-semibold dark:text-white text-gray-700 whitespace-nowrap">{column?.text}</td>
                  <td className="py-4 px-6 text-base dark:text-white text-gray-900 whitespace-nowrap">
                    {!!data
                      ? !!column?.formatter
                        ? column?.formatter(data[column?.dataIndex], data)
                        : data[column?.dataIndex]
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {actions && <div className="mt-6 flex justify-end">{actions}</div>}
      </div>
    </div>
  );
};

export const TableImage = ({ url }) => {
  const [image, setImage] = useState();
  return (
    <div className="w-inline-block h-8">
      <img
        role="button"
        src={url}
        alt="Image"
        onClick={() => setImage(url)}
        style={{ maxWidth: "100%", maxHeight: "100%", cursor: "pointer" }}
      />
      <Modal
        width={800}
        open={image}
        onCancel={() => setImage(undefined)}
        footer={null}
        bodyStyle={{ padding: 0, zIndex: 60 }}
        closeIcon={
          <FaTimes
            size={18}
            className="rounded hover:bg-none text-primary"
          />
        }
      >
        <div className="flex justify-center items-center">
          <img
            className="w-100 "
            style={{ minHeight: 400 }}
            src={image}
            alt=""
          />
        </div>
      </Modal>
    </div>
  );
};
