import { type ReactElement } from 'react';

import { Layout } from '@/components/layout';
import { ProfileBanner } from '@/ui/profile-banner';
import { TechIUse } from '@/ui/tech-i-use';
import { ThingsIveBuilt } from '@/ui/things-ive-built';

const Home = () => {
  return (
    <div className="flex w-full flex-col gap-10">
      <ProfileBanner />
      <ThingsIveBuilt />
      <TechIUse />
    </div>
  );
};

Home.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
