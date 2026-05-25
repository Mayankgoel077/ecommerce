"use client";

import React, { useState } from "react";

const Todo = () => {
    const [task, setTask] = useState<string>("");
    const [todos, setTodos] = useState<string[]>([]);

    const addTodo = (): void => {
        if (task.trim() === "") return;

        setTodos([...todos, task]);
        setTask("");
    };

    const deleteTodo = (index: number): void => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-4">

            <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">

                <h1 className="text-5xl font-bold text-center text-white mb-8">
                    Todo List
                </h1>

                {/* Input Section */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">

                    <input
                        type="text"
                        placeholder="Enter your task..."
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        className="flex-1 px-5 py-4 rounded-2xl bg-white/10 text-white placeholder:text-slate-300 border border-white/20 outline-none focus:ring-2 focus:ring-red-400 text-lg transition"
                    />

                    <button
                        onClick={addTodo}
                        className="bg-red-500 hover:bg-red-600 text-white px-6 py-4 rounded-2xl font-semibold text-lg transition duration-300 hover:scale-105 shadow-lg whitespace-nowrap"
                    >
                        Add Task
                    </button>

                </div>

                {/* Todo List */}
                {
                    todos.length === 0 ? (
                        <p className="text-center text-slate-300 text-lg">
                            No tasks added yet 
                        </p>
                    ) : (
                        <ul className="space-y-4">

                            {todos.map((todo, index) => (
                                <li
                                    key={index}
                                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white/10 border border-white/10 p-5 rounded-2xl text-white shadow-md hover:bg-white/20 transition duration-300"
                                >

                                    <span className="break-all text-lg font-medium">
                                        {todo}
                                    </span>

                                    <button
                                        onClick={() => deleteTodo(index)}
                                        className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl text-white font-semibold transition duration-300 hover:scale-105 self-start sm:self-auto"
                                    >
                                        Delete
                                    </button>

                                </li>
                            ))}

                        </ul>
                    )
                }

            </div>

        </div>
    );
};

export default Todo;