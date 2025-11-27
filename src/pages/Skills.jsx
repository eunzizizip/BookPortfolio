import React from "react";

export default function Skills() {
  const skills = [
  { icon: '⚛️', name: 'React, JavaScript, CSS', level: '85%', color: '#61dafb' },
  { icon: '🟢', name: 'Node.js(Express)', level: '70%', color: '#339933' },
  { icon: '🐬', name: 'MySQL', level: '88%', color: '#3E6E93' },
  { icon: '🔐', name: 'JWT, bcrypt, REST API', level: '80%', color: '#7A3EF5' }
];

  return (
    <div style={{ 
      padding: '50px', 
      height: '100%',
      background: 'linear-gradient(to bottom, #ffffff, #f8f9ff)'
    }}>
      <h2 style={{ 
        color: '#667eea', 
        marginBottom: '30px',
        fontSize: '36px',
        fontWeight: '700',
        borderBottom: '3px solid #667eea',
        paddingBottom: '10px',
        display: 'inline-block'
      }}>
        Skills
      </h2> 
      
      <div style={{ marginTop: '30px' }}>
        {skills.map((skill, index) => (
          <div key={index} style={{ marginBottom: '25px' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              marginBottom: '8px'
            }}>
              <span style={{ fontSize: '24px', marginRight: '10px' }}>
                {skill.icon}
              </span>
              <span style={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>
                {skill.name}
              </span>
            </div>
            <div style={{
              width: '100%',
              height: '12px',
              background: '#e0e0e0',
              borderRadius: '10px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: skill.level,
                height: '100%',
                background: `linear-gradient(to right, ${skill.color}, ${skill.color}dd)`,
                borderRadius: '10px',
                transition: 'width 1s ease'
              }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}