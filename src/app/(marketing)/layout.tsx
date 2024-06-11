import React from 'react';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="pt-36 pb-20 h-full overflow-y-auto no-scrollbar">
      {children}
    </main>
  );
}
