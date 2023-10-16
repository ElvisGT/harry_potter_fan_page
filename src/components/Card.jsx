
const Card = ({id,img,name}) => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-body">
                    <img className="card-img" src={img} />
                    <p className="card-text">{name}</p>
                    <button className="btn btn-primary">Detalles</button>
                </div>
            </div>
        </div>
    )
}

export default Card
