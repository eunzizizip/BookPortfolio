import React from "react";

// ProjectDetail 컴포넌트 (Projects 컴포넌트의 스타일과 일치하도록 조정)
export default function ProjectDetail() {
  const mainColor = '#667eea'; // Projects 제목 색상
  const lightBg = '#f8f9ff';   // Projects 컴포넌트의 하단 배경색

  // 예시 프로젝트 데이터 (dAy I 기준)
  const project = {
    title: "📝 dAy I",
    description: "AI가 감정을 분석하고 위로글을 작성해주는 일기 플랫폼",
    period: "2025.03 ~ 2025.06",
    team: "개인 프로젝트",
    tech: "React, Node.js, OpenAI API, MySQL",
    roles: "프론트엔드 UI 개발, 백엔드 서버 로직 구현, 데이터베이스 설계 및 연동",
    features: [
      "일기 작성 후 AI가 감정 분석",
      "AI가 작성한 위로 글 제공",
      "월별 감정 통계 시각화"
    ]
  };

  return (
    <div
      style={{
        // Projects 컴포넌트의 배경 그라데이션 대신, Projects 내부에서 상세 페이지가 깔끔하게 보이도록 흰색 배경 사용
        padding: '50px',
        height: '100%', // 부모로부터 높이 상속
        maxHeight: '90vh', // 화면 높이에 따라 적절히 조정하여 스크롤 유도
        background: 'white', 
        overflowY: 'auto', // 스크롤 기능 추가
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)', // Projects 카드와 유사한 그림자
        borderRadius: '12px',
        maxWidth: '900px',
        margin: '0 auto',
      }}
    >
      
      {/* --- 프로젝트 제목 섹션 --- */}
      <h2 style={{ 
        color: mainColor,
        fontSize: '36px',
        fontWeight: '700',
        borderBottom: `3px solid ${mainColor}aa`, // Projects 제목 스타일 유지
        paddingBottom: '10px',
        display: 'inline-block',
        marginBottom: '30px'
      }}>
        {project.title}
      </h2>

      <p style={{ 
        lineHeight: '1.8', 
        fontSize: '18px', 
        color: '#333', 
        marginBottom: '40px',
        fontWeight: '500',
        background: lightBg, // Projects 배경색의 밝은 부분을 활용
        padding: '20px',
        borderRadius: '10px'
      }}>
        {project.description}
      </p>

      {/* --- 프로젝트 이미지 추가 --- */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <img 
          src="/public/dayi.png"   // ← 여기에 너 이미지 경로 넣기
          alt="프로젝트 이미지"
          style={{
            width: '100%',
            maxWidth: '600px',
            borderRadius: '12px',
            boxShadow: '0 6px 18px rgba(0,0,0,0.12)'
          }}
        />
      </div>


      {/* --- 기간 및 팀 구성 섹션 --- */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
        
        {/* 기간 */}
        <div style={{ padding: '20px', borderRadius: '10px', background: '#f5f7fa', borderLeft: `4px solid ${mainColor}` }}>
          <h3 style={{ color: mainColor, marginBottom: '8px', fontSize: '20px', fontWeight: '700' }}>🗓️ 기간</h3>
          <p style={{ fontSize: '16px', color: '#555' }}>{project.period}</p>
        </div>

        {/* 팀 구성 */}
        <div style={{ padding: '20px', borderRadius: '10px', background: '#f5f7fa', borderLeft: `4px solid ${mainColor}` }}>
          <h3 style={{ color: mainColor, marginBottom: '8px', fontSize: '20px', fontWeight: '700' }}>👥 팀 구성</h3>
          <p style={{ fontSize: '16px', color: '#555' }}>{project.team}</p>
        </div>
      </div>
      
      {/* --- 주요 기능 --- */}
      <h3 style={{ color: mainColor, marginBottom: '15px', fontSize: '24px', fontWeight: '700' }}>💡 주요 기능</h3>
      <ul style={{ marginBottom: '30px', paddingLeft: '0', listStyle: 'none' }}>
        {project.features.map((feature, index) => (
          <li key={index} style={{ marginBottom: '10px', fontSize: '17px', color: '#333', background: lightBg, padding: '10px 15px', borderRadius: '8px', borderLeft: `3px solid ${mainColor}` }}>
            ✅ {feature}
          </li>
        ))}
      </ul>

      {/* --- 사용 기술 --- */}
      <h3 style={{ color: mainColor, marginBottom: '15px', fontSize: '24px', fontWeight: '700' }}>🛠️ 사용 기술</h3>
      <div style={{ 
          marginBottom: '30px', 
          fontSize: '17px', 
          color: mainColor,
          padding: '15px 20px',
          background: lightBg,
          borderRadius: '8px',
          fontWeight: '600',
          border: `1px solid ${mainColor}33`
        }}>
        {project.tech}
      </div>

      {/* --- 내 역할 --- */}
      <h3 style={{ color: mainColor, marginBottom: '15px', fontSize: '24px', fontWeight: '700' }}>⭐ 내 역할</h3>
      <p style={{ fontSize: '17px', color: '#333', lineHeight: '1.7', padding: '10px 0' }}>
        {project.roles}
      </p>
    </div>
  );
}