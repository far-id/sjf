import { useEffect, useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Table from './components/Table';
import TimeLine from './components/TimeLine';
import NonPreemtive from './components/NonPreemtive';

function App() {
  const processes = [
    {
      name: "First Job",
      arrivalTime: 0,
      burstTime: 12,
      priority: 1
    },
    {
      name: "Second Job",
      arrivalTime: 4,
      burstTime: 8,
      priority: 2
    },
    {
      name: "Third Job",
      arrivalTime: 10,
      burstTime: 2,
      priority: 4
    },
    {
      name: "Fourth Job",
      arrivalTime: 7,
      burstTime: 9,
      priority: 3
    }
  ];

  const [process, setProcess] = useState({
    name: "", //String
    arrivalTime: "", //number
    burstTime: "" //number
  });
  const [sjf, setSjf] = useState([]);
  function submitHandler(e) {
    e.preventDefault();
    setSjf((prevSjf) => [
      ...prevSjf,
      process
    ]);
    setProcess({
      name: "", //String
      arrivalTime: "", //number
      burstTime: "", //number
      priority: "" //number
    });
  }

  return (
    <div className="container min-h-screen bg-gray-900 px-14 py-14">
      <div className='grid grid-cols-2 gap-x-4 mb-14'>
        <form onSubmit={ submitHandler }>
          <Input value={ process.name } onChange={ e => setProcess({ ...process, name: e.target.value }) } { ...{ name: "name", slot: "Nama Process" } } />
          <Input value={ process.arrivalTime } onChange={ e => setProcess({ ...process, arrivalTime: e.target.value }) } { ...{ name: "at", slot: "Arrive Time", type: "number" } } />
          <Input value={ process.burstTime } onChange={ e => setProcess({ ...process, burstTime: e.target.value }) } { ...{ name: "bt", slot: "Burst Time", type: "number" } } />
          <Input value={ process.priority } onChange={ e => setProcess({ ...process, priority: e.target.value }) } { ...{ name: "p", slot: "Priority", type: "number" } } />
          <Button slot="add" />
        </form>
        <div className="relative overflow-x-hidden sm:rounded-lg">
          <Table { ...{ thSlots: [{ slot: "Process Name" }, { slot: "Arrival Time" }, { slot: "Burst Time" }], tdSlots: sjf } } />
          <div className='flex justify-between px-3 pb-3 mt-4 duration-700 rounded-md hover:shadow-md hover:shadow-blue-900 hover:ease-in-out hover:transition-opacity'>
            <Button slot="Preemtive" type='button' />
            <Button slot="non-Preemtive" type='button' />
          </div>
        </div>
      </div>
      <NonPreemtive processes={ processes } />
    </div>
  );
}

export default App;
