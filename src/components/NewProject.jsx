import { useRef } from "react";
import Input from "./Input";

const NewProject = ({onAdd}) => {
    const titleRef = useRef(); //retrieve value of input without managing state
    const descRef = useRef();
    const dueDateRef = useRef();

    const handleSave = () => {
        const enteredTitle = titleRef.current.value;
        const enteredDesc = descRef.current.value;
        const enteredDD = dueDateRef.current.value;

        onAdd({
            title: enteredTitle,
            description: enteredDesc,
            dueDate: enteredDD
        });
    };

    return (
    <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
                <button className="text-stone-800 hover:text-stone-950">Cancel</button>
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
)}

export default NewProject;