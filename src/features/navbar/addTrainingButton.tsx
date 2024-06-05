import { Link } from 'react-router-dom';
import { routes } from 'shared/nav/constants';

export const AddTrainingButton = () => {
  //TODO: пока хардкод
  const id = 1;

  return (
    <Link to={`${routes.training}/${id}`}>
      <div className="flex justify-center items-baseline h-full">
        <div className="w-[48px] h-[48px] border-2 rounded-full border-primary flex justify-center items-center">
          <div className="plus" />
        </div>
      </div>
    </Link>
  );
};
