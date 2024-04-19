import { Link } from "react-router-dom";




const CardsItem = ({ card }) => {
    const { specialTitle, specialName, specialId, description, image, facilities } = card;
    return (
        <div>
            <div className=" gap-10 pt-10 pb-20">
                <div className="card w-90 group border border-indigo-400 hover:scale-105  hover:border-indigo-200 bg-gray-200 shadow-xl">
                    <figure className="">
                        <img src={image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-xl font-bold">{specialTitle}</h2>
                        {
                            description.length > 50
                                ? <p>{description.slice(0, 50)}
                                    <br /><Link className="btn btn-active btn-link text-2xl font-bold"
                                        to={`/card/${specialId}`}
                                    >Read more.....</Link></p>
                                : <p>{description}</p>
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CardsItem;
