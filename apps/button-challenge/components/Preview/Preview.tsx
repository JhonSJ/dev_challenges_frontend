import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Preview: React.FC<Props> = ({ children }) => {
  return (
    <div className="p-12 bg-white shadow-lg border rounded-lg grid place-items-center">
      {children}
    </div>
  );
};

export default Preview;
