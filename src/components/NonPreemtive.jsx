import React, { useEffect, useState } from 'react';
import TimeLine from './TimeLine';

export default function NonPreemtive({ processes }) {
    const [arrivePriorityProcess, setArrivePriorityProcess] = useState([]);
    const [priorityProcess, setPriorityProcess] = useState([]);
    let higherTime =
        Math.max(...processes.map(p => p.arrivalTime))
        + processes.reduce(
            (prev, current) => prev + current.burstTime
            , 0
        );
    const arriveProcess = () => {
        let currentTime = 0;
        do {
            for (let i = 0; i < processes.length; i++) {// ulangi sebanyak proses
                if (currentTime === processes[i].arrivalTime) {// jika sekarang adalah waktu tiba salah satu proses maka tambahkan proses ke sjf
                    setArrivePriorityProcess((prevProcess) => [
                        ...prevProcess,
                        {
                            name: processes[i].name,
                            arrivalTime: processes[i].arrivalTime,
                            burstTime: processes[i].burstTime,
                            priority: processes[i].priority,
                            status: "Tiba",
                        },
                    ]);
                }
            }
            currentTime++;
        } while (currentTime <= higherTime);
    };

    const executeProcess = () => {
        let currentTime = 0;
        let inProcess = false;
        do {
            for (let i = 0; i < arrivePriorityProcess.length; i++) {// ulangi sebanyak proses
                let executeUntil = currentTime + arrivePriorityProcess[i].burstTime;
                let executeStart = currentTime;
                if (inProcess && currentTime === executeUntil) {
                    inProcess = false;
                } else if (inProcess) {
                    break;
                }
                if (!inProcess) {
                    inProcess = true;
                    setPriorityProcess((prevProcess) => [
                        ...prevProcess,
                        {
                            name: arrivePriorityProcess[i].name,
                            arrivalTime: arrivePriorityProcess[i].arrivalTime,
                            burstTime: arrivePriorityProcess[i].burstTime,
                            priority: arrivePriorityProcess[i].priority,
                            status: "Eksekusi",
                            executeStart: executeStart,
                            executeUntil: executeUntil
                        },
                    ]);
                }
            }
            currentTime++;
        } while (currentTime <= higherTime);
    };
    useEffect(() => {
        arriveProcess();
    }, []);
    useEffect(() => {
        arrivePriorityProcess.sort((a, b) => a.priority - b.priority);
        setPriorityProcess(arrivePriorityProcess);
        executeProcess();
    }, [arrivePriorityProcess]);

    return (
        <TimeLine processes={ priorityProcess } />
    );
};
