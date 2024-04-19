import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import CardsItem from "../CardsItem/CardsItem";
import Estate from "../Estate/Estate";

const Home = () => {
    const card = useLoaderData();
    console.log(card)
    return (
        <div>
            <Banner></Banner>
            <Estate></Estate>
            <div className="grid md:grid-cols-3 gap-10 pt-20 mb-20 px-3 py-3">
                {
                    card?.map(aCards => <CardsItem
                    key={aCards.specialId}
                    card ={aCards}
                    ></CardsItem>)
                }
            </div>
        </div>

    );
};

export default Home;
