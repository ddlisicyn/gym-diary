import { useEffect, useState } from "react";
import { HomeButton } from "./HomeButton";
import { useLocation } from "react-router-dom";
import { StatsButton } from "./StatsButton";
import routes from "../../routes/constants";
import { AddTrainingButton } from "./AddTrainingButton";

const { core, stats } = routes;

export const Navbar = () => {
    const [activeLocation, setActiveLocation] = useState('Stats');
    const location = useLocation();

    useEffect(() => {
        setActiveLocation(location.pathname);
    }, [location]);

    return (
        <div className="flex flex-row items-center justify-center w-screen h-1/6 fixed bottom-0 pb-5 gap-5">
            <HomeButton isActive={activeLocation === core} />
            <AddTrainingButton />
            <StatsButton isActive={activeLocation === stats} />
        </div>
    )
}