import React, { useState } from 'react';
import './TaskModal.css';

const TaskModal = ({ onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Low');
  const [checklist, setChecklist] = useState([{ id: Date.now(), text: '', checked: false }]);
  const [dueDate, setDueDate] = useState('');

  const handleAddChecklistItem = () => {
    setChecklist([...checklist, { id: Date.now(), text: '', checked: false }]);
  };

  const handleChecklistChange = (id, text) => {
    setChecklist(checklist.map(item => (item.id === id ? { ...item, text } : item)));
  };

  const handleChecklistDelete = (id) => {
    setChecklist(checklist.filter(item => item.id !== id));
  };

  const handleSave = () => {
    if (title.trim() === '') {
      alert('Title is required');
      return;
    }
    onSave({ title, priority, checklist, dueDate });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Same as before */}
        <label>Title*</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        
        <label>Priority*</label>
        <div className="priority-options">
          <label className="priority-option">
            <input type="radio" name="priority" value="High" checked={priority === 'High'} onChange={() => setPriority('High')} />
            <span style={{ color: 'red' }}>● High Priority</span>
          </label>
          <label className="priority-option">
            <input type="radio" name="priority" value="Moderate" checked={priority === 'Moderate'} onChange={() => setPriority('Moderate')} />
            <span style={{ color: 'blue' }}>● Moderate Priority</span>
          </label>
          <label className="priority-option">
            <input type="radio" name="priority" value="Low" checked={priority === 'Low'} onChange={() => setPriority('Low')} />
            <span style={{ color: 'green' }}>● Low Priority</span>
          </label>
        </div>
        
        <label>Checklist</label>
        {checklist.map(item => (
          <div key={item.id} className="checklist-item">
            <input type="text" value={item.text} onChange={(e) => handleChecklistChange(item.id, e.target.value)} />
            <button onClick={() => handleChecklistDelete(item.id)}>🗑️</button>
          </div>
        ))}
        <button className="add-checklist-btn" onClick={handleAddChecklistItem}>+ Add new checklist item</button>
        
        <label>Due Date</label>
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />

        <div className="button-group">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="save-btn" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
