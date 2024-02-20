function Card({card_image,card_title, card_text}){
    
    const adventureCards = []
    
    
    return(
        <div className="card">
            <img className="card-image" src={card_image} alt="profile picture"/>
            <h2 className="card-title">{card_title}</h2>
            <p className="card-text">{card_text}</p>
        </div>
    );
}

export default Card