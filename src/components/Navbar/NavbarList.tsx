import Link from 'next/link';
import React from 'react';

export interface NavbarListProps {
  ulClassName: string;
  liArray: liProps[];
  liClassName: string;
}
export interface liProps {
  href: string;
  text: string;
}

const NavbarList: React.FunctionComponent<NavbarListProps> = ({
  ulClassName,
  liArray,
  liClassName,
}) => {
  return (
    <div>
      <ul className={ulClassName}>
        {liArray.map((element) => {
          return (
            <li key={element.text} className={liClassName}>
              <Link href={element.href}>{element.text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavbarList;
