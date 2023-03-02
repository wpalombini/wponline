import * as React from 'react';
export const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/blog'>Blog</a>
          </li>
          <li>
            <a href='/docs'>Docs</a>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
};
