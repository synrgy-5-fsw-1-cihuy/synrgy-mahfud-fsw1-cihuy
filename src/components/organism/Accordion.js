const Accordion = (props) => {
    const { header, detail } = props
    return (
        <div className="w-full bg-white border border-gray-200 dark:bg-gray-800 rounded-sm mb-4">
            <div className="relative overflow-hidden">
                <input
                    type="checkbox"
                    className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                    collapse
                />
                <div className="h-12 w-full flex items-center">
                    <h1 className="px-5">{header}</h1>
                </div>
                <div className="flex items-center absolute top-4 right-3 transition-transform duration-500 rotate-0 peer-checked:-rotate-90">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </div>
                <div className="block overflow-hidden bg-white dark:bg-gray-800 transition-all duration-500 max-h-0 peer-checked:max-h-60">
                    <ul className="w-full list-none mb-4 px-5 py-2 hover:bg-blue-100 bg-blue-50 dark:bg-gray-700">
                        <li className="font-bold underline">{detail}</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Accordion