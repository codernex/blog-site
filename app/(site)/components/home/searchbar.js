import React, { useRef, useState } from "react";
import { AutoComplete, DatePicker } from "antd";
import { FaPlus, FaMinus, FaSearch } from "react-icons/fa";
import Icon from "../common/icon";

const options = [
    {
        value: "Burns Bay Road",
    },
    {
        value: "Downing Street",
    },
    {
        value: "Wall Street",
    },
];

const SearchBar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const inputRef = useRef(null);
    const inputRef1 = useRef(null);
    const datePickerRef1 = useRef(null);
    const datePickerRef2 = useRef(null);

    const handleAutoCompleteClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleDatePicker2Click = () => {
        if (datePickerRef2.current) {
            datePickerRef2.current.input.focus();
        }
    };

    return (
        <div className="flex flex-wrap justify-between items-center p-4 border bg-white z-0">
            <div className="flex items-center cursor-pointer !border-r-4"
                onClick={handleAutoCompleteClick}
            >
                <Icon name="location-search" />

                <div className="flex flex-col w-full custom-search">
                    <AutoComplete
                        ref={inputRef}
                        variant="borderless"
                        style={{ width: 200 }}
                        options={options}
                        placeholder={<>
                            <div className="flex flex-col gap-0">
                                <span className="text-sm font-bold text-primary">Where</span>
                                <span className="text-secondary text-sm font-bold">search destinations</span>
                            </div>

                        </>}
                        filterOption={(inputValue, option) =>
                            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                            -1
                        }
                    />
                </div>
            </div>

            <div
                className="flex gap-2 items-center cursor-pointer pr-[37px] border-r pl-10"
                onClick={handleDatePicker2Click}
            >
                <Icon name="check-search" />

                <div className="flex flex-col items-center custom-search">
                    <AutoComplete
                        ref={inputRef}
                        variant="borderless"
                        style={{ width: 200 }}
                        options={options}
                        placeholder={<>
                            <div className="flex flex-col gap-0">
                                <span className="text-sm font-bold text-primary">Check out</span>
                                <span className="text-secondary text-sm font-bold">dates</span>
                            </div>

                        </>}
                        filterOption={(inputValue, option) =>
                            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                            -1
                        }
                    />
                </div>
            </div>



            <div className="bg-secondary text-white flex justify-center items-center px-4 py-2 rounded-lg">
                <FaSearch className=" text-white mr-2" />
                <parent>Search</parent>
            </div>
        </div>
    );
};

export default SearchBar;