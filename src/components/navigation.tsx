import { AiFillGithub } from 'react-icons/ai';
import { GoBook } from 'react-icons/go';
import { GrLinkedinOption } from 'react-icons/gr';
import { HiOutlineDocumentText } from 'react-icons/hi';

import { Link } from './link';
import { TbFile } from 'react-icons/tb';

export const Navigation = () => {
  return (
    <div className="flex items-center space-x-2 text-base font-semibold leading-none text-rose-100/90 sm:space-x-5">
      <Link
        href="/cv.pdf"
        download
        size="sm"
        leftIcon={<TbFile />}
      >
        <span className="transition-all duration-300 ease-out group-hover:text-rose-200">
          CV
        </span>
      </Link>
      <Link
        href="/about"
        leftIcon={<HiOutlineDocumentText />}
        size="sm"
      >
        <span className="transition-all duration-300 ease-out group-hover:text-rose-200">
          About
        </span>
      </Link>

      <Link href="/guestbook" leftIcon={<GoBook />} size="sm">
        <span className="transition-all duration-300 ease-out group-hover:text-rose-200">
          Guestbook
        </span>
      </Link>

      <Link
        href="https://github.com/backurdi"
        external
        leftIcon={<AiFillGithub />}
        variant="icon-button"
      />

      <Link
        href="https://www.linkedin.com/in/bachir-kurdi-0399a161/"
        external
        leftIcon={<GrLinkedinOption />}
        variant="icon-button"
      />
    </div>
  );
};
