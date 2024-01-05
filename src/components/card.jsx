const Card = ({ image, header, content }) => {
    return (
        <div className="card">
            <img src={image} />
            <div className="card-content">
                <h4>{header}</h4>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Card;
