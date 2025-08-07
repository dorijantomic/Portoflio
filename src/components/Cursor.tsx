"use client";
import React, { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX - 8 + "px";
      cursor.style.top = e.clientY - 8 + "px";
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      id="cursor"
      className="fixed w-4 h-4 bg-accent rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-200 ease-out"
    ></div>
  );
};

export default Cursor;
