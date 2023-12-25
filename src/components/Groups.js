import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../assets/css/groups.css";

function Groups() {
  const [groups, setGroups] = useState([]);
  const [groupsPerRow, setGroupsPerRow] = useState(4);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get('https://world-cup2030-apigrp.onrender.com/Groups');
        setGroups(response.data);
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    };

    fetchGroups();
  }, []);

  useEffect(() => {
    const updateGroupsPerRow = () => {
      if (window.innerWidth >= 1200) {
        setGroupsPerRow(4);
      } else if (window.innerWidth >= 800) {
        setGroupsPerRow(3);
      } else if (window.innerWidth >= 600) {
        setGroupsPerRow(2);
      } else {
        setGroupsPerRow(1);
      }
    };

    // Update groupsPerRow on window resize
    window.addEventListener('resize', updateGroupsPerRow);

    // Initial update
    updateGroupsPerRow();

    // Cleanup the event listener
    return () => window.removeEventListener('resize', updateGroupsPerRow);
  }, []);

  return (
    <div className="GroupsDiv">
      <div className="TitleG">
        <h1>World Cup Groups 2030</h1>
      </div>
      <div className="groups" style={{ '--groups-per-row': groupsPerRow }}>
        {groups.map(group => (
          <div key={group.id} className="SingleGrp">
            <h2>{group.name}</h2>
            <div className="countries">
              {group.countries.map(country => (
                <div key={country.number} className="country">
                  <span className="country-number">{country.number}</span>
                  <img src={country.flag} alt={country.name} />
                  <p>{country.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Groups;
