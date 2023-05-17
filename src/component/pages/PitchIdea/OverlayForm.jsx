import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import './overlay.css'

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyA-9lQTOeAgL8ElP2nJ8Fj3EIKOHEJQwmk",
  authDomain: "ecell-2704e.firebaseapp.com",
  projectId: "ecell-2704e",
  storageBucket: "ecell-2704e.appspot.com",
  messagingSenderId: "576322627480",
  appId: "1:576322627480:web:b3aed16aa0667863fd6ded"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function OverlayForm({ onClose }) {
  const [startupName, setStartupName] = useState('');
  const [ideaStage, setIdeaStage] = useState('');
  const [ideaSector, setIdeaSector] = useState('');
  const [leaderName, setLeaderName] = useState('');
  const [leaderEmail, setLeaderEmail] = useState('');
  const [leaderContact, setLeaderContact] = useState('');
  const [leaderOrganization, setLeaderOrganization] = useState('');
  const [additionalMembers, setAdditionalMembers] = useState([]);

  const handleAddMember = () => {
    setAdditionalMembers([...additionalMembers, { name: '', email: '', contact: '', organization: '' }]);
  };

  const handleAdditionalMemberChange = (index, field, value) => {
    const updatedMembers = [...additionalMembers];
    updatedMembers[index][field] = value;
    setAdditionalMembers(updatedMembers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const startupData = {
        startupName,
        ideaStage,
        ideaSector,
        leaderName,
        leaderEmail,
        leaderContact,
        leaderOrganization,
        additionalMembers,
      };

      const startupCollectionRef = collection(db, 'startups');
      await addDoc(startupCollectionRef, startupData);

      onClose();
    } catch (error) {
      console.log('Error adding startup:', error);
    }
  };

  return (
    <div className="popup-modal">
    <div className="popup-modal-content">
      <span className="close-button" onClick={onClose}>
        &times;
      </span>
    <form className="startup-form" onSubmit={handleSubmit}>
        <h1>Pitch Your Idea!</h1>

        <label>
          Startup Name:
          <input type="text" value={startupName} onChange={(e) => setStartupName(e.target.value)} required />
        </label>

        <label>
          Idea Stage:
          <select value={ideaStage} onChange={(e) => setIdeaStage(e.target.value)} required>
            <option value="">Select Idea Stage</option>
            <option value="Ideation Phase">Ideation Phase</option>
            <option value="Registered">Registered</option>
            <option value="Funded Phase">Funded Phase</option>
          </select>
        </label>

        <label>
          Idea Sector:
          <select value={ideaSector} onChange={(e) => setIdeaSector(e.target.value)} required>
            <option value="">Select Idea Sector</option>
            <option value="Fintech">Fintech</option>
            <option value="Software">Software</option>
            <option value="Logistics">Logistics</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Construction">Construction</option>
            <option value="Others">Others</option>
          </select>
        </label>

        <h2>Member Details</h2>

        <label>
          Leader:
          <div>
            <label>
              Name:
              <input type="text" value={leaderName} onChange={(e) => setLeaderName(e.target.value)} required />
            </label>

            <label>
              Email:
              <input type="email" value={leaderEmail} onChange={(e) => setLeaderEmail(e.target.value)} required />
            </label>

            <label>
              Contact:
              <input type="tel" value={leaderContact} onChange={(e) => setLeaderContact(e.target.value)} required />
            </label>

            <label>
              Organization:
              <input type="text" value={leaderOrganization} onChange={(e) =>setLeaderOrganization(e.target.value)} required />
          </label>
        </div>
      </label>
      {additionalMembers.map((member, index) => (
      <div key={index}>
        <h3>Member {index + 1}</h3>
        <label>
          Name:
          <input
            type="text"
            value={member.name}
            onChange={(e) => handleAdditionalMemberChange(index, 'name', e.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={member.email}
            onChange={(e) => handleAdditionalMemberChange(index, 'email', e.target.value)}
            required
          />
        </label>

        <label>
          Contact:
          <input
            type="tel"
            value={member.contact}
            onChange={(e) => handleAdditionalMemberChange(index, 'contact', e.target.value)}
            required
          />
        </label>
        <label>
          Organization:
          <input
            type="text"
            value={member.organization}
            onChange={(e) => handleAdditionalMemberChange(index, 'organization', e.target.value)}
            required
          />
        </label>
      </div>
    ))}

    <button type="button" className='addmember' onClick={handleAddMember}>
      Add another Member
    </button>
          <div className="btn-sub">
    <button type="submit" >Submit</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
        </div>
  </form>
</div>
</div>

);
};


export default OverlayForm



