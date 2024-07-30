import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({onAdd, onCancel}) => {
    const modal = useRef();
    
    const titleRef = useRef(); //retrieve value of input without managing state
    const descRef = useRef();
    const dueDateRef = useRef();

    const handleSave = () => {
        const enteredTitle = titleRef.current.value;
        const enteredDesc = descRef.current.value;
        const enteredDD = dueDateRef.current.value;

        if(
            enteredTitle.trim() === '' ||
            enteredDesc.trim() === '' ||
            enteredDD.trim() === ''
        ) {
            modal.current.open();
            return;
            //onAdd will NOT be executed
        }

        onAdd({
            title: enteredTitle,
            description: enteredDesc,
            dueDate: enteredDD
        });
    };

    return (
        <>
            <Modal ref={modal} buttonCaption="Okay">
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Looks like you forgot to enter a value.</p>
            </Modal> 
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button>
                    </li>
                    <li>
                        <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={titleRef} label="Title" />
                    <Input ref={descRef} label="Description" textarea />
                    <Input type="date" ref={dueDateRef} label="Due Date" />
                </div>
            </div>
        </>
    )
}

export default NewProject;