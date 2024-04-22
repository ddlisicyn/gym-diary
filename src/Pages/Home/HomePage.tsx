import { useMeQuery } from "../../services/api";
import { IMe } from "../../services/constants";
import { Spinner } from "../../Components/Loaders/Spinner";

export const HomePage = () => {
    const { data, isError, isLoading, isSuccess, refetch } = useMeQuery();

    if (isLoading) {
        return <Spinner width="w-1/4"/>
    }

    //TODO https://lxadm.com/type-undefined-is-not-assignable-to-type/
    //Необходимо решить проблему того, что тс видит возможность получения undefined
    const { img, login, name }: IMe = data;

    return (
        <div>
            <h1 className="font-bold">Home</h1>
            <img src={img}/>
            <p>{login}</p>
            <p>{name}</p>
        </div>
    )
}