import React from "react";

export default function Contact() {
  const contacts = [
    { icon: '📧', label: 'Email', value: 'koeunji0826@naver.com', color: '#ea4335' },
    { icon: '🐱', label: 'GitHub', value: 'https://github.com/eunzizizip', color: '#333' },
    { icon: '📱', label: 'Phone', value: '+82 10-6861-1718', color: '#34a853' }
  ];

  return (
    <div style={{ 
      padding: '50px', 
      height: '100%',
      background: 'linear-gradient(to bottom, #ffffff, #f8f9ff)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <div>
        <h2 style={{ 
          color: '#667eea', 
          marginBottom: '30px',
          fontSize: '36px',
          fontWeight: '700',
          borderBottom: '3px solid #667eea',
          paddingBottom: '10px',
          display: 'inline-block'
        }}>
          Contact
        </h2>
        
        <div style={{ marginTop: '30px' }}>
          {contacts.map((contact, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
              padding: '15px',
              background: 'white',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              transition: 'transform 0.3s'
            }}>
              <span style={{ 
                fontSize: '28px', 
                marginRight: '15px',
                filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))'
              }}>
                {contact.icon}
              </span>
              <div>
                <div style={{ 
                  fontSize: '14px', 
                  color: '#999',
                  marginBottom: '3px'
                }}>
                  {contact.label}
                </div>
                <div style={{ 
                  fontSize: '16px', 
                  color: contact.color,
                  fontWeight: '600'
                }}>
                  {contact.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    
    </div>
  );
}