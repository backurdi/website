import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { GoBook } from 'react-icons/go';
import { GrLinkedinOption } from 'react-icons/gr';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { TbFile } from 'react-icons/tb';
import { MdOutlineCake } from 'react-icons/md';
import { useIntersection } from 'react-use';

import { Link } from '@/components/link';
import { useNavContext } from '@/providers/nav-provider';

import { ProfileImage } from '../components/profile-image';
import Image from 'next/image';

export const ProfileBanner = () => {
  const { setIsNavOpen, isNavOpen } = useNavContext();
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '-150px',
  });

  useEffect(() => {
    if (intersection && setIsNavOpen) {
      setIsNavOpen(!intersection.isIntersecting);
    }
  }, [intersection, setIsNavOpen]);

  return (
    <div
      className={clsx(
        'flex flex-col items-start text-xl transition duration-300',
        {
          'opacity-0': isNavOpen,
          'opacity-100': !isNavOpen,
        }
      )}
      ref={intersectionRef}
    >
      <div className="flex flex-col gap-4 px-4">
        <div className="flex w-full justify-end gap-7 pb-5">
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

          <Link
            href="/guestbook"
            leftIcon={<GoBook />}
            size="sm"
          >
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
        <div className="flex w-full items-center space-x-4">
          <ProfileImage />
          <h1 className="flex w-full flex-col gap-1">
            <span className="text-3xl font-bold">
              Bachir Kurdi
            </span>
            <code className="font-mono text-base font-medium">
              Creating value for over 7 years
            </code>
          </h1>
        </div>
        <p className="text-base">
          Healthily obsessed with designing and coding awesome
          stuff, to learn new things and grow by solving hard
          problems.
        </p>
        <p className="text-base">
          Currently interested in building amazing tools and
          utilizing AI with the incredible technological
          developments we are experiencing.
        </p>
        <div
          className={clsx(
            'flex flex-row flex-wrap items-center justify-start gap-5 border-y-[1px] border-gray-600/20',
            'w-full py-3 text-sm font-semibold text-neutral-400/80',
            'sm:justify-between sm:gap-3'
          )}
        >
          <div className="flex items-center gap-1">
            <FaReact size={16} className="fill-rose-100/50" />
            <span>CTO @ Capio.pro</span>
          </div>

          <div className="flex items-center gap-1">
            <BiMap size={16} color="fill-rose-100/50" />
            <span>Copenhagen - Denmark</span>
          </div>

          <div className="flex items-center gap-1">
            <MdOutlineCake size={16} color="fill-rose-100/50" />
            <span>December 21th</span>
          </div>
        </div>
        <p className="text-base text-sm">
          What I like to do outside of work:
        </p>
        <div
          className={clsx(
            'flex flex-row flex-wrap items-center justify-start gap-5 border-y-[1px] border-gray-600/20',
            'w-full py-3 text-sm font-semibold text-neutral-400/80',
            'sm:justify-between sm:gap-3'
          )}
        >
          <div className="flex items-center gap-1">
            <Image
              src="/images/padel.svg"
              alt="Padel"
              width={22}
              height={22}
            />
            <span>Padel tennis</span>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/images/kimono.svg"
              alt="Padel"
              width={22}
              height={22}
            />
            <span>Brazilian Jiu jitsu</span>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/images/bouldering.svg"
              alt="Padel"
              width={22}
              height={22}
            />
            <span>Bouldering</span>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/images/coffee.svg"
              alt="Padel"
              width={22}
              height={22}
            />
            <span>Good Coffee</span>
          </div>
        </div>
      </div>
    </div>
  );
};
