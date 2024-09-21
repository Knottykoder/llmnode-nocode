// GenericNode.js

import React, { useState } from 'react';
import { Handle } from 'reactflow';

const GenericNode = ({
  id,
  data,
  typeOptions,
  nodeType,
  handleNameChange,
  handleTypeChange,
  nodeStyles,
  handles,
}) => {
  const [name, setName] = useState(data?.name || id.replace('custom-', ''));
  const [type, setType] = useState(data?.type || (typeOptions ? typeOptions[0] : ''));

  const onNameChange = (e) => {
    setName(e.target.value);
    if (handleNameChange) handleNameChange(e.target.value);
  };

  const onTypeChange = (e) => {
    setType(e.target.value);
    if (handleTypeChange) handleTypeChange(e.target.value);
  };

  return (
    <div style={nodeStyles.container}>
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
        />
      ))}
      <div>
        <span>{nodeType}</span>
      </div>
      <div>
        <label>
          Name:
          <input 
            type="text" 
            value={name} 
            onChange={onNameChange} 
            style={nodeStyles.input}
          />
        </label>
        {typeOptions && (
          <label>
            Type:
            <select value={type} onChange={onTypeChange} style={nodeStyles.select}>
              {typeOptions.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>
    </div>
  );
};

export default GenericNode;
