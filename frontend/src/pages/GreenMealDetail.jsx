import React from "react";

export default function GreenMealDetail() {
  const mainColor = '#f093fb'; // Projects 컴포넌트에서 Green Meal에 사용된 색상
  const lightBg = '#fcf5ff';   // 메인 컬러를 활용한 밝은 배경색

  // 프로젝트 데이터
  const project = {
    title: "🍃🥗 Green Meal",
    description: "근처 매장의 마감 세일 상품을 예약할 수 있는 웹 서비스",
    period: "2024.09 ~ 2024.12",
    team: "개인 프로젝트",
    tech: "React, Node.js, MySQL, Kakao Maps API",
    roles: "프론트엔드 UI 개발, 백엔드 서버 구현, 데이터베이스 설계 및 연동",
    features: [
      "마감 세일 상품 조회 및 예약 기능",
      "매장 정보 및 지도 API 연동",
      "사용자 리뷰 작성 및 확인"
    ]
  };

  return (
    <div
      style={{
        // Projects 컴포넌트의 스타일 및 스크롤 설정 유지
        padding: '50px',
        height: '100%',
        maxHeight: '90vh',
        background: 'white', 
        overflowY: 'auto',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        borderRadius: '12px',
        maxWidth: '900px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      
      {/* --- 프로젝트 제목 섹션 --- */}
      <h2 style={{ 
        color: mainColor,
        fontSize: '36px',
        fontWeight: '700',
        borderBottom: `3px solid ${mainColor}aa`, 
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
        background: lightBg, 
        padding: '20px',
        borderRadius: '10px'
      }}>
        {project.description}
      </p>

      {/* --- 프로젝트 이미지 추가 --- */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <img 
          src="/public/greenmeal.png"   // ← 여기에 너 이미지 경로 넣기
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