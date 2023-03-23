import Link from 'next/link';
import { FC } from 'react';

interface ButtonGroupProps {
  items: string[];
}

export const ButtonGroup: FC<ButtonGroupProps> = ({ items }) => {
  return (
    <span className="isolate inline-flex rounded-md shadow-sm">
      {items.map((item) => (
        <Link
          key={item.toLowerCase()}
          type="button"
          className="relative inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 -ml-px hover:bg-gray-50 focus:z-10 first-of-type:rounded-l-md first-of-type:ml-0 last-of-type:rounded-r-md"
          href={item.toLowerCase()}
        >
          {item}
        </Link>
      ))}
    </span>
  );
};
