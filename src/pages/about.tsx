import { useEffect } from 'react';

import { Layout } from '@/components/layout';
import { useNavContext } from '@/providers/nav-provider';
// import { MyTimeline } from '@/ui/my-timeline';

const AboutPage = () => {
  const { setIsNavOpen } = useNavContext();

  useEffect(() => {
    setIsNavOpen(true);
  });

  return (
    <section className="px-4 sm:pt-0">
      <p className="pt-10 text-xl font-semibold">About me</p>

      <div className="mt-10">
        <p className="mb-5">Hey, I&apos;m Bachir 🙋🏻‍♂️</p>

        <p className="mb-5">
          I&apos;m a software engineer from Denmark with over 7
          years of experience, currently solving problems for
          sales people in regulated companies. Building
          complicated systems, utilizing amazing UI/UX flows and
          state of the art technologies. Getting my hands dirty
          with AI API&apos;s, vector databases, and building cool
          stuff.
        </p>
      </div>

      <div className="my-10 border-b border-rose-100/20" />

      <div>
        <p className="mb-5">
          My interests are many; I love to keep my mind and body
          active. I&apos;m a big fan of fitness, doing BJJ
          (Brazilian Jiu Jitsu), playing Padel tennis,
          Bouldering, and whatever can get the heart pumping. At
          the same time, I love to read, watch movies, and play
          games. I also love to travel and explore new places.
        </p>

        <p className="mb-5">
          This combination of interests is what keeps me
          interested in always learning something and creating
          new projects. It&apos;s really awesome what we can do
          these days with the internet and the tools we have
          available.
        </p>

        <p className="mb-5">
          It&apos;s been over 6 years since I discovered the
          world of programming. It&apos;s a discovery that never
          stops changing. I have become a big fan of TypeScript
          and Next.js. I have started to experiment a lot with
          backend code with Node, and I&apos;m also playing
          around with Python.
        </p>
      </div>
    </section>
  );
};

AboutPage.getLayout = (page: React.ReactElement) => (
  <Layout>{page}</Layout>
);

export default AboutPage;
