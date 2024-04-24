import { ISection } from "../constants";

export const Section = ({ info }: {info: ISection}) => {
    const { title, description, img } = info;

    return (
        <section className="flex flex-col w-4/5 h-1/4 gap-3">
            <h4>{title}</h4>
            <div className="w-full h-full shadow-lg rounded-xl">
                
            </div>
        </section>
    )
}