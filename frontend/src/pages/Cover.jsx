import React from "react";

export default function Cover() {
  return (
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #fdf7e3 0%, #e8dfc7 100%)',
      color: '#4a3f2f', // 크림색과 어울리는 잉크 컬러
      textAlign: 'center',
      padding: '40px'
    }}>
      <h1 style={{ 
        fontSize: '48px', 
        marginBottom: '20px', 
        fontWeight: '700',
        textShadow: '1px 1px 3px rgba(0,0,0,0.05)'
      }}>
        Eunji’s Portfolio
      </h1>
      <p style={{ fontSize: '24px', opacity: 0.9, marginBottom: '10px' }}>
       
      </p>
      <p style={{ 
        fontSize: '18px', 
        marginTop: '20px', 
        opacity: 0.7,
        animation: 'pulse 2s infinite'
      }}>
        Click to open →
      </p>
    </div>
  );
}
