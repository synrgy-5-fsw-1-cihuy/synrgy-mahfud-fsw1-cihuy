import React from 'react'
import Select from 'react-select';
const Selects = ({id, label, value, placeholder, options, setSearch, search}) => {
    return (
        <div className="w-full mb-6 md:mb-0 ">
            <label
                className="block uppercase tracking-wide dark:text-white text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-zip"
            >
                {label}
            </label>
            {id !== undefined ?
                (<input
                    className='w-full p-2 border rounded-md dark:bg-gray-800 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200'
                    value={value} disabled />
                )
                :
                (
                    <Select placeholder={placeholder} options={options} onChange={(e) => setSearch({ ...search, name: e.value })} />
                )
                }

        </div>
    )
}

export default Selects