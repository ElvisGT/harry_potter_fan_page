import { Ring } from "@uiball/loaders";
import { useNavigate,useParams } from "react-router-dom";
import { useFetchCharacterByName } from "../hooks/useFetchCharacterByName";

const CharacterDetails = () => {
    const navigate = useNavigate();
    const characterParam = useParams();
    const name = characterParam.name.split(":")
    const {data,loading} = useFetchCharacterByName(name[name.length - 1]);



    const handleBack = () => {
        navigate("/");
    }

    return (
        <div className="character-details-container">
            {loading &&
                <div className="ring">
                    <Ring
                        size={40}
                        lineWeight={5}
                        speed={2}
                        color="black"

                    />
                </div>
            }
            {
                data.map(item => (
                    <div key={item.id} className="card-container">
                        <img src={item.img} alt={item.name} className="card-img"/>
                        <p className="fw-bold">{item.name}</p>
                        <p className="text-center">{item.history}</p>
                        <p className="text-center">Estado: {item.state}</p>
                        <p className="text-center">Ocupación: {item.occupation}</p>
                        <p className="text-center">Género: {item.gender}</p>
                    </div>
                ))
            }
            <div className="character-details-button"> 
                <button onClick={handleBack} className="btn btn-primary btn-back">Atras</button>
            </div>
        </div>
    )
}

export default CharacterDetails;
