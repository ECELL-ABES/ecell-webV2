import React from 'react'

function Preview({ formData, onClose }) {
    return (
      <div>
        <h2>Preview:</h2>
        <p>Startup Name: {formData.startupName}</p>
        <p>Startup Type: {formData.startupType}</p>
        <p>Idea Stage: {formData.ideaStage}</p>
        <h3>Members:</h3>
        {formData.members.map((member, index) => (
          <div key={index}>
            <p>Name: {member.name}</p>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
          </div>
        ))}
        <button onClick={onClose}>Close</button>
      </div>
    );
  }


export default Preview