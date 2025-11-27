import React from "react";

export default function Projects({ onProjectClick }) {
  const projects = [
    {
      key: "dayi",
      title: "📝 dAy I",
      description:
        "사용자의 감정을 AI가 분석해 위로와 피드백을 제공하는 감정 케어 웹 플랫폼",
      tech: "React, Node.js, OpenAI",
      color: "#667eea",
    },
    {
      key: "greenmeal",
      title: "🍃🥗 Green Meal",
      description:
        "마감 세일 매장을 찾아 할인 상품을 예약할 수 있는 웹 서비스",
      tech: "React, Node.js, Kakao Maps",
      color: "#f093fb",
    },
    {
      key: "tone4u",
      title: "💄 TONE4U",
      description:
        "퍼스널 컬러 기반 립 추천 + 화장품 나눔 기능 모바일 앱",
      tech: "Java, AndroidStudio",
      color: "#4facfe",
    },
  ];

  return (
    <div
      style={{
        padding: "50px",
        height: "100%",
        background: "linear-gradient(to bottom, #ffffff, #f8f9ff)",
        overflowY: "auto",
      }}
    >
      <h2
        style={{
          color: "#667eea",
          marginBottom: "30px",
          fontSize: "36px",
          fontWeight: "700",
          borderBottom: "3px solid #667eea",
          paddingBottom: "10px",
          display: "inline-block",
        }}
      >
        Projects
      </h2>

      <div style={{ marginTop: "20px" }}>
        {projects.map((project) => (
          <div
            key={project.key}
            onClick={(e) => {
              e.stopPropagation();
              //onProjectClick(project.key);
            }}
            style={{
              cursor: "pointer",
              marginBottom: "25px",
              padding: "20px",
              background: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              borderLeft: `4px solid ${project.color}`,
              transition: "0.3s",
            }}
          >
            <h3 style={{ fontSize: "22px", marginBottom: 10, color: "#333" }}>
              {project.title}
            </h3>

            <p
              style={{
                fontSize: "16px",
                color: "#666",
                lineHeight: "1.6",
                marginBottom: "10px",
              }}
            >
              {project.description}
            </p>

            <div style={{ fontSize: "14px", color: project.color, fontWeight: 600 }}>
              {project.tech}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}