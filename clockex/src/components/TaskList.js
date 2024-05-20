import React, { useState, useEffect } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      addTask(e.target.value.trim());
      e.target.value = '';
    }
  };

  return (
    <div id="taskBox">
      <input id="taskInput" type="text" placeholder="Add a task" onKeyDown={handleKeyDown} />
      <ul id="taskList">
        {tasks.map((task, index) => (
          <li key={index} onClick={() => removeTask(index)}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
