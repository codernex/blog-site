const PageTitle = ({ title }) => {
    return (
        <div className="items-center justify-between mb-4">
            <div className="dark:bg-dark_color bg-white dark:border-opacity-30 dark:border-gray-50 dark:border shadow-sm p-3 header_3">
                <h1 className="text-2xl dark:text-white text-gray-700 font-semibold">{title}</h1>
            </div>
        </div>
    )
}

export default PageTitle