import React from "react";

export default function ProjectList({ goToPage }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Projects</h2>

      <div 
        style={cardStyle}
        onClick={() => goToPage(2)} // 📍 dAy I 상세 페이지 (page=2)
      >
        <h3>📝 dAy I</h3>
        <p>AI 감정 기반 일기 분석 플랫폼</p>
      </div>

      <div 
        style={cardStyle}
        onClick={() => goToPage(3)} // 📍 Green Meal 상세 페이지 (page=3)
      >
        <h3>🍃🥗 Green Meal</h3>
        <p>마감 세일 할인 음식 예약 플랫폼</p>
      </div>

      <div 
        style={cardStyle}
        onClick={() => goToPage(4)} // 📍 TONE4U 상세 페이지 (page=4)
      >
        <h3>💄 TONE4U</h3>
        <p>퍼스널 컬러 기반 립 추천 앱</p>
      </div>
    </div>
  );
}

const cardStyle = {
  padding: "15px",
  background: "#fff",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  marginBottom: "15px",
  cursor: "pointer"
};
