import React from 'react';

function Th({ slot }) {
    return (
        <th scope="col" className="px-6 py-3">
            <div className="flex items-center">
                { slot }
                <button><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></button>
            </div>
        </th>
    );
}
function Tdh({ slot }) {
    return (
        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
            { slot }
        </th>
    );
}

function Td({ slot }) {
    return (
        <td className="px-6 py-4">
            { slot }
        </td>
    );
}
export default function Table({ thSlots, tdSlots }) {
    return (
        <table className="w-full text-sm text-left text-gray-400">
            <thead className="text-xs  uppercase bg-gray-700 text-gray-400">
                <tr>
                    { thSlots.map((thSlot, k) =>
                        <Th slot={ thSlot.slot } key={ k } />
                    ) }
                    <th scope="col" className="px-6 py-3">
                    </th>
                </tr>
            </thead>
            <tbody>
                { tdSlots.map((tdSlot, k) => (
                    <tr key={ k } className="border-b bg-gray-800 border-gray-700">
                        <Td slot={ tdSlot.name } />
                        <Td slot={ tdSlot.arrivalTime } />
                        <Td slot={ tdSlot.burstTime } />
                        <td className="px-6 py-4 text-center">
                            <button className="font-medium text-blue-500 hover:underline">Edit</button>
                        </td>
                    </tr>
                )) }

            </tbody>
        </table>
    );
}
