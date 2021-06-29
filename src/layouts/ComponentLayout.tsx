import React from "react";
import classnames from "classnames";

interface Props {
  title?: string;
  colSpan?: number | string;
  children: React.ReactNode;
}
function ComponentLayout({ title, children, colSpan }: Props) {
  colSpan = colSpan || 1;
  return (
    <div
      className={classnames("w-full px-4 py-2 bg-white shadow-lg", {
        "col-span-1": colSpan == 1,
        "col-span-2": colSpan == 2,
        "col-span-3": colSpan == 3,
        "col-span-4": colSpan == 4,
        "col-span-5": colSpan == 5,
        "col-span-6": colSpan == 6,
      })}
    >
      <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
        {title}
      </div>
      {children}
    </div>
  );
}

export default ComponentLayout;
