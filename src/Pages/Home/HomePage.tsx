import { useMeQuery } from "../../services/api";
import { IMe } from "../../services/constants";
import { Spinner } from "../../Components/Loaders/Spinner";
import { Link } from "react-router-dom";
import { Navbar } from "../../Components/Navbar/Navbar";
import routes from "../../routes/constants";

const { profile } = routes;

export const HomePage = () => {
    const { data, isError, isLoading, isSuccess, refetch } = useMeQuery();

    if (isLoading) {
        return (
            <div className="flex flex-col w-screen h-screen justify-center items-center">
                <Spinner width="w-1/4" />
            </div>
        )
    }

    //TODO https://lxadm.com/type-undefined-is-not-assignable-to-type/
    //Необходимо решить проблему того, что тс видит возможность получения undefined
    const { img, login, name }: IMe = data;

    return (
        <div>
            <div className="flex flex-row justify-between w-screen p-10 items-center">
                <p className="font-semibold text-lg/8">Привет, {name}</p>
                <Link to={profile} ><img src={img} alt="profile-avatar" className="w-8 rounded-full" /></Link>
            </div>
            <div>
                <Navbar />
            </div>
        </div>
    )
}