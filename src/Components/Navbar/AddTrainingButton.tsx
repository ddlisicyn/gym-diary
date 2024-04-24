import { Link } from "react-router-dom";
import routes from "../../routes/constants";

const { training } = routes;

export const AddTrainingButton = () => {
    //TODO: пока хардкод
    const id = 1;

    return (
        <Link to={`${training}/${id}`}>
            <div className="w-[52px] h-[52px] border-2 rounded-full border-primary flex justify-center items-center mb-10">
                <div className="plus" />
            </div>
        </Link>
    )
}