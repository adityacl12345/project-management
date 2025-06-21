import { useRef } from "react"
import CustomInput from "./CustomInput.jsx"
import Modal from "./Modal.jsx";

export default function NewProject({onAdd, onCancel}) {
    const modal = useRef();
    const titleRef = useRef();
    const descRef = useRef();
    const dueRef = useRef();

    function handleSave() {
        const enteredTitle = titleRef.current.value;
        const enteredDesc = descRef.current.value;
        const enteredDue = dueRef.current.value;

        if(enteredTitle.trim() === "" || enteredDesc.trim() === "" || enteredDue.trim() === '') {
             modal.current.open();
             return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDesc,
            dueDate: enteredDue
        })
    }
    return (
        <>
        <Modal ref={modal} buttonCaption="Close">
            <h2 className="text-xl font-bold text-stone-800 text-center py-2 bg-stone-300 my-4">Invalid Input</h2>
            <p className='text-stone-800 mb-4'>Looks like you forgot to enter a value!</p>
            <p className='text-stone-800 mb-4'>Please provide a valid Input.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
                <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-slate-950 " onClick={handleSave}>Save</button></li>
            </menu>
            <div>
                <CustomInput type="text" ref={titleRef} label="Title" />
                <CustomInput ref={descRef} label="Description" textarea />
                <CustomInput type="date" ref={dueRef} label="Due date" />
            </div>
        </div>
        </>
    )
}