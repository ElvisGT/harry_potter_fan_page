import { useNavigate } from "react-router-dom";

const CharactersCard = ({id,img,name}) => {
    const navigate = useNavigate();
    
    const handleDetails = () => {
        navigate(`/:${id}`)
    }

    return (
        <div className="card-container">
            <div className="card">
                <div className="card-body">
                    <img className="card-img" src={img} />
                    <p className="card-text">{name}</p>
                    <button className="btn btn-primary" onClick={handleDetails}>Detalles</button>
                </div>
            </div>
        </div>
    )
}

export default CharactersCard;
