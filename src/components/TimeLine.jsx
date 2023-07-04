import React, { useEffect, useRef, useState } from 'react';

function List({ name, status, arrivalTime }) {
    return (
        <li className="mb-10 ml-6 transition duration-1000 ease-in">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full -left-3 ring-8 ring-gray-900 text-gray-50">
                { arrivalTime }
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">{ name } <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">{ status }</span></h3>

        </li>
    );
}

export default function TimeLine({ processes }) {
    const [renderedProcesses, setRenderedProcesses] = useState([]);
    const scrollRef = useRef(null);
    const scrollToBottom = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    };
    useEffect(() => {
        scrollToBottom();
    }, [renderedProcesses]);
    useEffect(() => {
        const renderWithDelay = async () => {
            for (let i = 0; i < processes.length; i++) {
                await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay 1000ms

                setRenderedProcesses((prevProcesses) => [
                    ...prevProcesses,
                    processes[i]
                ]);
            }
        };

        renderWithDelay();
    }, [processes]);
    return (
        <ol className="relative border-l border-gray-700">
            { renderedProcesses.map((process, index) => (
                <List key={ index } { ...{ name: process.name, status: process.status, arrivalTime: process.arrivalTime } } />
            )) }
            <div ref={ scrollRef } />
        </ol>
    );
}
