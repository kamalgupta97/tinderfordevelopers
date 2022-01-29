import React from "react";

export default function TechStack({ children }) {
  return (
    <>
      <div
        style={{
          padding: 10,
          color: "white",
          border: "1px solid white",
          background: "rgb(0,200,5)",
          borderRadius: 10,
          fontSize: 25,
          display: "inline-block",
          marginLeft: 10,
        }}
      >
        {children}
      </div>
    </>
  );
}
