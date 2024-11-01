import React, { useState } from 'react';
import DivTask from './DivTask'; // Import the modal component
import './div.css'; // Include necessary styling

const Div = () => {
  const columns = [
    { id: 1, name: 'Backlog' },
    { id: 2, name: 'To do' },
    { id: 3, name: 'In progress' },
    { id: 4, name: 'Done' }
  ];

  const [tasks, setTasks] = useState({
    1: [], // Backlog tasks
    2: [], // To do tasks
    3: [], // In progress tasks
    4: []  // Done tasks
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveTask = (task) => {
    setTasks(prevTasks => ({
      ...prevTasks,
      2: [...prevTasks[2], task]  // Add to "To Do" column (id 2) by default
    }));
  };

  // Function to move task between columns
  const moveTaskToColumn = (task, fromColumn, toColumn) => {
    setTasks(prevTasks => {
      // Remove task from current column
      const updatedFromColumn = prevTasks[fromColumn].filter(t => t !== task);

      // Add task to the target column
      const updatedToColumn = [...prevTasks[toColumn], task];

      return {
        ...prevTasks,
        [fromColumn]: updatedFromColumn,
        [toColumn]: updatedToColumn
      };
    });
  };

  // Function to get initials from the title
  const getInitials = (title) => {
    const words = title.split(' ');
    return words.length > 1 ? words[0][0] + words[1][0] : words[0][0];
  };

  return (
    <div className="kanban-board">
      {columns.map((column) => (
        <div key={column.id} className="column">
          <div className="column-header">
            <h3>{column.name}</h3>
            {column.id === 2 && (
              <span className="add-icon" onClick={handleOpenModal}>+</span>
            )}
          </div>
          <div className="task-list">
            {tasks[column.id].map((task, index) => (
              <div key={index} className="task-card">
                {/* Task Card Header */}
                <div className="task-card-header">
                  <div className="task-priority">
                    <span className={`priority-dot priority-${task.priority.toLowerCase()}`}></span>
                    <span>{task.priority.toUpperCase()} PRIORITY</span>
                  </div>
                  <div className="initials-badge">
                    ...
                  </div>
                </div>

                {/* Task Title */}
                <h5>{task.title}</h5>

                {/* Checklist Section */}
                <div className="checklist">
                  <p>Checklist ({task.checklist.filter(item => item.checked).length}/{task.checklist.length})</p>
                  {task.checklist.map((item, i) => (
                    <div key={i} className="checklist-item">
                      <input type="checkbox" checked={item.checked} readOnly />
                      <label>{item.text}</label>
                    </div>
                  ))}
                </div>

                {/* Due Date */}
                <button className="due-date-btn">
                  {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </button>

                {/* Status Buttons */}
                <div className="status-buttons">
                  {/* Conditionally render buttons, hiding the button for the current column */}
                  {column.id !== 1 && <button onClick={() => moveTaskToColumn(task, column.id, 1)}>Backlog</button>}
                  {column.id !== 2 && <button onClick={() => moveTaskToColumn(task, column.id, 2)}>To Do</button>}
                  {column.id !== 3 && <button onClick={() => moveTaskToColumn(task, column.id, 3)}>In Progress</button>}
                  {column.id !== 4 && <button onClick={() => moveTaskToColumn(task, column.id, 4)}>Done</button>}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {isModalOpen && <DivTask onClose={handleCloseModal} onSave={handleSaveTask} />}
    </div>
  );
};

export default Div;
