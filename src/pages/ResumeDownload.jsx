import React from "react";
import ResumeFile from "../assets/resume.pdf";

export default function ResumeDownload() {
  return (
    <div
      style={{
        padding: "50px",
        height: "100%",
        background: "linear-gradient(to bottom, #ffffff, #f8f9ff)",
        fontFamily: "Pretendard",
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
        Resume
      </h2>

      <div
        style={{
          marginTop: "30px",
          background: "white",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 3px 10px rgba(0,0,0,0.06)",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "16px", color: "#666", marginBottom: "20px" }}>
          아래 버튼을 눌러 이력서 및 자기소개서를 다운로드할 수 있습니다.
        </p>

         <a href={ResumeFile} download>
          <button
            style={{
              padding: "12px 28px",
              background: "#667eea",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.03)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            다운로드 하기
          </button>
        </a>
      </div>
    </div>
  );
}
