import React from "react";

export default function IntroDetails() {
  const infoList = [
    { icon: "👤", label: "이름", value: "고은지" },
    { icon: "🎂", label: "생년월일", value: "2004.08.26" },
    { icon: "📧", label: "이메일", value: "koeunji0826@naver.com" },
    { icon: "📱", label: "연락처", value: "010-6861-1718" },
    { icon: "📍", label: "위치", value: "인천광역시 강화군" },
    { icon: "🎓", label: "학력", value: "인하공업전문대학\n컴퓨터정보공학과" },
  ];

  return (
    <div
      style={{
        padding: "40px 30px",
        height: "100%",
        background: "linear-gradient(to bottom, #ffffff, #f8f9ff)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          color: "#667eea",
          marginBottom: "25px",
          fontSize: "36px",
          fontWeight: "700",
          borderBottom: "3px solid #667eea",
          paddingBottom: "8px",
          display: "inline-block",
        }}
      >
        Personal Info
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "25px",
          marginTop: "20px",
        }}
      >
        {infoList.map((item, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "15px",
              color: "#333",
              padding: "12px",
              background: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(102, 126, 234, 0.1)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(102, 126, 234, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(102, 126, 234, 0.1)";
            }}
          >
            <span style={{ fontSize: "24px" }}>{item.icon}</span>

            <div style={{ minWidth: 0, flex: 1 }}>
              <div
                style={{
                  fontWeight: "700",
                  color: "#667eea",
                  marginBottom: "3px",
                  fontSize: "14px",
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#555",
                  wordBreak: "break-word",
                }}
              >
                {item.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}