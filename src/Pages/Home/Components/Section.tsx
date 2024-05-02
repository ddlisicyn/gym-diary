import { ISection } from "../constants";
import { useNavigate } from "react-router-dom";

export const Section = ({ info }: {info: ISection}) => {
    const { title, description, img, route } = info;
    const navigate = useNavigate();

    const navigateToRoute = () => {
        navigate(route);
    }

    return (
        <section className="flex flex-col w-4/5 h-1/4 gap-3">
            <h4>{title}</h4>
            <div className="w-full h-full flex flex-row items-center shadow-lg rounded-xl p-3" onClick={navigateToRoute}>
                <div className="w-3/5">
                    {img && <img src={img} alt="list of excercises image" /> }
                </div>
                <div className="w-full">
                    <p className="text-sm text-secondary px-2 text-justify">{description}</p>
                </div>
            </div>
        </section>
    )
}