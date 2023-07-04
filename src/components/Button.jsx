import React from 'react';

export default function Button({ type = "submit", slot, className = "" }) {
    return (
        <button type={ type } className={ `${className} text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800` }>{ slot }</button>

    );
}
