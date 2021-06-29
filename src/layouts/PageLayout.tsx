import React from "react";

interface Props {
  title?: string;
  children: React.ReactNode;
}

function PageLayout({ children }: Props) {
  return (
    <div className="w-full overflow-y-auto grid grid-cols-6 gap-4">
      {children}
    </div>
  );
}

export default PageLayout;
