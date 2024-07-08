import React from "react";

interface StarProps {
  type: "full" | "half" | "empty";
}

const Star: React.FC<StarProps> = ({ type }) => {
  const getStarIcon = () => {
    switch (type) {
      case "full":
        return "★";
      case "half":
        return "⯨";
      default:
        return "☆";
    }
  };

  return (
    <span style={{ color: "gold", fontSize: "14px" }}>{getStarIcon()}</span>
  );
};

export default Star;
