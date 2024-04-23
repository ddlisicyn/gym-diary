import { useMeQuery } from "../../services/api";
import { IMe } from "../../services/constants";
import { Spinner } from "../../Components/Loaders/Spinner";
import { Link } from "react-router-dom";

export const HomePage = () => {
    const { data, isError, isLoading, isSuccess, refetch } = useMeQuery();

    if (isLoading) {
        return <Spinner width="w-1/4"/>
    }

    //TODO https://lxadm.com/type-undefined-is-not-assignable-to-type/
    //Необходимо решить проблему того, что тс видит возможность получения undefined
    const { img, login, name }: IMe = data;

    return (
        <div className="flex flex-row justify-between w-screen p-10 items-center">
            <p className="font-semibold text-lg/8">Привет, {name}</p>
            <Link to="profile"><img src={img} alt="profile-avatar" className="w-10 rounded-full"/></Link>
        </div>
    )
}