import { useMeQuery } from '../../services/api';
import { Spinner } from '../../Components/Loaders/Spinner';
import { Link } from 'react-router-dom';
import { Navbar } from '../../Components/Navbar/Navbar';
import routes from '../../routes/constants';
import { Section } from './Components/Section';
import { ISection } from './constants';

const { profile, stats, exercises, favourites } = routes;

const sections: ISection[] = [
  {
    title: 'Предыдущие тренировки',
    route: stats,
  },
  {
    title: 'Список упражнений',
    route: exercises,
    description:
      'Нами была собрана база данных из 000 количества упражнений. Выбери те, которые тебе понравятся.',
    img: 'https://amp.sportscheck.com/i/sportscheck/D100001001113996?w=500&h=500&qlt=10&unsharp=(0,1,1,7)',
  },
  {
    title: 'Избранные упражнения',
    route: favourites,
  },
];

export const HomePage = () => {
  const { data, isLoading } = useMeQuery();

  //TODO перевести на skeleton
  if (isLoading) {
    return (
      <div className="flex flex-col w-screen h-screen justify-center items-center">
        <Spinner width="w-1/4" />
      </div>
    );
  }

  //TODO https://lxadm.com/type-undefined-is-not-assignable-to-type/
  //Необходимо решить проблему того, что тс видит возможность получения undefined
  const { img, name } = data || {};

  return (
    <div className="w-screen h-screen">
      <header className="flex flex-row justify-between w-screen p-10 items-center">
        <p className="font-semibold text-lg/8">Привет, {name}</p>
        <Link to={profile}>
          <img src={img} alt="profile-avatar" className="w-8 rounded-full" />
        </Link>
      </header>
      <main className="flex flex-col gap-8 justify-start items-center h-3/4 w-screen overflow-y-scroll">
        {sections.map((section, index) => (
          <Section key={index} info={section} />
        ))}
      </main>
      <nav>
        <Navbar />
      </nav>
    </div>
  );
};
