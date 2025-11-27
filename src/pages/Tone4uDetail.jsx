import React from "react";
import Tone4U from '../assets/tone4u.png'; // 경로는 ProjectDetail.jsx 위치 기준

export default function Tone4uDetail() {
  const mainColor = '#4facfe'; // Projects 컴포넌트에서 TONE4U에 사용된 색상
  const lightBg = '#f5faff';   // 메인 컬러를 활용한 밝은 배경색
  const textColor = '#333';

  // 프로젝트 데이터 (임의로 추가된 데이터 포함)
  const project = {
    title: "💄 TONE4U",
    description: "퍼스널 컬러를 기반으로 사용자에게 맞는 립 제품을 추천해주는 모바일 앱",
    period: "2025.04 ~ 2025.06",
    team: "3인 팀 프로젝트",
    tech: "Java, Android Studio",
    roles: "Android 앱 UI 구현, 회원가입 · 로그인 기능 개발, 퍼스널 립 찾기 기능 개발",
    features: [
      "화장품 색상 추출 기능",
      "색상 비교 기반 립 제품 추천",
      "화장품 나눔 기능"    ]
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
        color: textColor, 
        marginBottom: '40px',
        fontWeight: '500',
        background: lightBg, 
        padding: '20px',
        borderRadius: '10px'
      }}>
        {project.description}
      </p>

      {/* --- 프로젝트 이미지 추가 --- */}
      <img
              src={Tone4U}
              alt="프로젝트 이미지"
              style={{
                width: '100%',
                maxWidth: '600px',
                borderRadius: '12px',
                boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
                marginBottom: '40px' // 여기서 마진 적용
              }}
            />
      

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
          <li key={index} style={{ marginBottom: '10px', fontSize: '17px', color: textColor, background: lightBg, padding: '10px 15px', borderRadius: '8px', borderLeft: `3px solid ${mainColor}` }}>
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
      <p style={{ fontSize: '17px', color: textColor, lineHeight: '1.7', padding: '10px 0' }}>
        {project.roles}
      </p>
    </div>
  );
}