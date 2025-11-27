import React, { useEffect, useState } from "react";
import "./Book.css";

export default function Book({ pages, cover, page, setPage }) {
  const [scale, setScale] = useState(1);

  const totalContentPages = pages.length;
  const BOOK_WIDTH = 1000; // 책의 원본 기준 너비(px)

  // 🔥 화면 크기에 따라 자동으로 scale 계산
  useEffect(() => {
    const updateScale = () => {
      const screenWidth = window.innerWidth;
      const newScale = Math.min(screenWidth / BOOK_WIDTH, 1); 
      setScale(newScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const next = () => {
    if (page === 0) setPage(1);
    else if (page < totalContentPages) setPage(page + 2);
  };

  const prev = () => {
    if (page === 1) setPage(0);
    else if (page > 1) setPage(page - 2);
  };

  return (
    <div
      className="book-wrapper"
      style={{ paddingTop: "80px", paddingBottom: "50px" }}
    >
      {/* 자동 scale 적용 */}
      <div
        className="book-scale"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        <div className="book">

          {/* COVER */}
          {page === 0 && (
            <div className="cover-page" onClick={next} style={{ cursor: "pointer" }}>
              <div className="cover-content">{cover}</div>
            </div>
          )}

          {/* PAGES */}
          {page !== 0 && (
            <>
              {/* LEFT */}
              <div className="paper left" onClick={prev}>
                <div className="page front">{pages[page - 1]}</div>
              </div>

              {/* RIGHT */}
              <div className="paper right" onClick={next}>
                <div className="page front">{pages[page] || ""}</div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="navigation">
        <button onClick={prev} disabled={page === 0}>◀ Prev</button>
        <span style={{ fontWeight: "bold", color: "#667eea" }}>
          {page === 0 ? "Cover" : `${page} - ${page + 1}`} / {totalContentPages}
        </span>
        <button onClick={next} disabled={page >= totalContentPages}>Next ▶</button>
      </div>

      <p style={{ textAlign: "center", color: "#aaa" }}>
        💡 페이지를 클릭해도 넘길 수 있어요!
      </p>
    </div>
  );
}

