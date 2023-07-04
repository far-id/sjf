import React from 'react';

export default function Input({ name, slot, type = "text", value, onChange }) {
    return (
        <div className="relative z-0 w-full mb-6 group">
            <input value={ value } onChange={ onChange } type={ type } name={ name } id={ name } className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
            <label htmlFor={ name } className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{ slot }</label>
        </div>
    );
}
