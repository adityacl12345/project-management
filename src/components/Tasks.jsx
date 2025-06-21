import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDel }) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask addTask={onAdd} />
            {tasks.length === 0 && (
                <p className="text-stone-800 my-4">
                    This project doesn't have any tasks yet.
                </p>
            )}
            {tasks.length > 0 && (
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {tasks.map(task => (
                        <li key={task.id} className="flex justify-between my-4">
                            <span>{task.task}</span>
                            <button onClick={() => onDel(task.id)} className="py-1 px-2 bg-stone-400 text-stone-800 hover:bg-stone-800 hover:text-stone-200">-</button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}