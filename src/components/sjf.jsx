import React, { useState } from 'react';

const SJFPreemptive = ({ processes }) => {
    const [executionLog, setExecutionLog] = useState([]);
    const [completedProcesses, setCompletedProcesses] = useState([]);
    const [currentTime, setCurrentTime] = useState(0);

    const executeSJFPreemptive = () => {
        let shortestJob = null;
        let shortestBurstTime = Infinity;

        for (let i = 0; i < processes.length; i++) {
            const process = processes[i];

            if (process.arrivalTime <= currentTime && process.burstTime < shortestBurstTime && !completedProcesses.includes(process)) {
                shortestJob = process;
                shortestBurstTime = process.burstTime;
            }
        }

        if (shortestJob) {
            setExecutionLog(prevLog => [...prevLog, `Executing process: ${shortestJob.name}`]);
            shortestJob.burstTime--;
            setCurrentTime(prevTime => prevTime + 1);

            if (shortestJob.burstTime === 0) {
                setCompletedProcesses(prevProcesses => [...prevProcesses, shortestJob]);
            }
        } else {
            setCurrentTime(prevTime => prevTime + 1);
        }
    };

    return (
        <div>
            <h2>SJF Preemptive</h2>
            <button onClick={ executeSJFPreemptive }>Execute</button>
            <div>
                <h3>Execution Log:</h3>
                { executionLog.map((log, index) => (
                    <p key={ index }>{ log }</p>
                )) }
            </div>
            <div>
                <h3>Completed Processes:</h3>
                { completedProcesses.map((process, index) => (
                    <div key={ index }>
                        <p>{ process.name }</p>
                        <p>Arrival Time: { process.arrivalTime }</p>
                        <p>Burst Time: { process.burstTime }</p>
                    </div>
                )) }
            </div>
        </div>
    );
};

const SJFNonPreemptive = ({ processes }) => {
    const [executionLog, setExecutionLog] = useState([]);
    const [completedProcesses, setCompletedProcesses] = useState([]);
    const [currentTime, setCurrentTime] = useState(0);

    const executeSJFNonPreemptive = () => {
        let shortestJob = null;
        let shortestBurstTime = Infinity;

        for (let i = 0; i < processes.length; i++) {
            const process = processes[i];

            if (process.arrivalTime <= currentTime && process.burstTime < shortestBurstTime && !completedProcesses.includes(process)) {
                shortestJob = process;
                shortestBurstTime = process.burstTime;
            }
        }

        if (shortestJob) {
            setExecutionLog(prevLog => [...prevLog, `Executing process: ${shortestJob.name}`]);
            setCurrentTime(prevTime => prevTime + shortestJob.burstTime);
            setCompletedProcesses(prevProcesses => [...prevProcesses, shortestJob]);
        } else {
            setCurrentTime(prevTime => prevTime + 1);
        }
    };

    return (
        <div>
            <h2>SJF Non-Preemptive</h2>
            <button onClick={ executeSJFNonPreemptive }>Execute</button>
            <div>
                <h3>Execution Log:</h3>
                { executionLog.map((log, index) => (
                    <p key={ index }>{ log }</p>
                )) }
            </div>
            <div>
                <h3>Completed Processes:</h3>
                { completedProcesses.map((process, index) => (
                    <div key={ index }>
                        <p>{ process.name }</p>
                        <p>Arrival Time: { process.arrivalTime }</p>
                        <p>Burst Time: { process.burstTime }</p>
                    </div>
                )) }
            </div>
        </div>
    );
};

const App = () => {
    const processes = [
        {
            name: "First Job",
            arrivalTime: 0,
            burstTime: 12
        },
        {
            name: "Second Job",
            arrivalTime: 4,
            burstTime: 8
        },
        {
            name: "Third Job",
            arrivalTime: 10,
            burstTime: 2
        },
        {
            name: "Fourth Job",
            arrivalTime: 7,
            burstTime: 9
        }
    ];

    return (
        <div className='grid grid-cols-2'>
            <SJFPreemptive processes={ processes } />
            <SJFNonPreemptive processes={ processes } />
        </div>
    );
};

export default App;
