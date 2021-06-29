import React from "react";

interface Props {
  title?: string;
  colSpan?: number;
  children: React.ReactNode;
}

function ComponentLayout({ title, children, colSpan }: Props) {
  return (
    <div
      className={`${"col-span-" + (colSpan || 1)} px-4 py-2 bg-white shadow-lg`}
    >
      <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
        {title}
      </div>
      {children}
    </div>
  );
}

export default ComponentLayout;
