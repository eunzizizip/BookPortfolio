import React from "react";
import "./Contents.css";

export default function Contents({ onMovePage }) {

  const safeMove = (e, target) => {
    e.stopPropagation();   // 🔥 Book의 페이지 넘김 이벤트 차단
    onMovePage(target);
  };

  return (
    <div className="contents" onClick={(e) => e.stopPropagation()}>
      <h1 className="contents-title">Contents</h1>

      <ul className="contents-list">
        <li onClick={(e) => safeMove(e, 2)}>1. Intro</li>
        <li onClick={(e) => safeMove(e, 4)}>2. Skills</li>

        <li onClick={(e) => safeMove(e, 5)}>3. Projects</li>
        <ul className="sub-list">
          <li onClick={(e) => safeMove(e, 6)}>ㄴ Day I</li>
          <li onClick={(e) => safeMove(e, 7)}>ㄴ Green Meal</li>
          <li onClick={(e) => safeMove(e, 8)}>ㄴ TONE4U</li>
        </ul>

        <li onClick={(e) => safeMove(e, 9)}>4. Resume</li>
        <li onClick={(e) => safeMove(e, 10)}>5. Contact</li>
      </ul>

      <p className="contents-note">
        * 프로젝트 상세 페이지는 Projects 챕터 아래에 포함됩니다.
      </p>
    </div>
  );
}
