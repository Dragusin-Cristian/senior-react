import React from "react";

type ColorProps = {
  hexCode: string;
  width: string;
  height: string;
};

const Color: React.FC<ColorProps> = ({ hexCode, width, height }) => {
  return (
    <div
      style={{
        backgroundColor: hexCode,
        width,
        height,
      }}
    ></div>
  );
};

export default Color;
