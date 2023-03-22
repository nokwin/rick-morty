import { FC } from 'react';
import { ButtonGroup } from '@app/components/button-group.component';

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <main className="flex justify-center items-center h-screen">
      <ButtonGroup items={['Characters', 'Locations', 'Episodes']} />
    </main>
  );
};

export default Home;
