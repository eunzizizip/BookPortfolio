import React from "react";

export default function Intro() {
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
        borderBottom: '3px solid #667eeaff',
        paddingBottom: '10px',
        display: 'inline-block'
      }}>
        About Me
      </h2>

      <p style={{ 
        lineHeight: '1.8', 
        fontSize: '16px',
        color: '#333',
        marginTop: '20px',
        marginBottom: '50px'  
      }}>
        안녕하세요! 👋<br/><br/>
        저는 <strong style={{ color: '#667eea' }}>보안에 관심을 가진 개발자 은지</strong>입니다.<br/><br/>
        안전한 서비스 구조와 사용자 데이터를 보호하는 기술에 흥미를 가지고 있으며,<br/>
        웹 보안과 인증 구조, 네트워크 보안에 대해 꾸준히 학습하고 있습니다.<br/><br/>
        안정적인 서비스를 만들기 위해<br/>
        보안 지식과 개발 역량을 함께 쌓아가고 있습니다.
      </p>

    </div>
  );
}
