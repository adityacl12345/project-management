import { useState } from "react";

export default function NewTask({ addTask}) {
    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        if(enteredTask.trim() == '') {
            return;
        }
        addTask(enteredTask);
        setEnteredTask(''); 
    }
    return (
        <div className="flex items-center gap-4">
            <input value={enteredTask} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleChange}/>
            <button className="py-1 px-2 bg-stone-400 text-stone-800 hover:bg-stone-800 hover:text-stone-200" onClick={handleClick}>+</button>
        </div>
    );
}