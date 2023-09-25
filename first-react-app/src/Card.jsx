
export default function Card({pic,title,price,onSale = false, info=[""]}){
    
    const styles = {boxShadow: onSale && "0 0 10px 5px #48abe0"}

    return(
        <div className = "card" style={styles}>
            <img src = {pic} alt="" width="100"/>
            <h2>{title}</h2>
            <p>{price}</p>
            <ul>
                {info.map((e)=>(new<li>{e}</li>))}
            </ul>
            {onSale && (<div className="onSale"><p>SALE!</p></div>)}
        </div>
    )
}