import './card.css'
const card = ({title, siteUrl, img}) => {
    return(
        <div className="card--main">
            <img src={img} alt='' className='card--image'/>
            <h1>{title}</h1>

            <a href={siteUrl} target="_blank" rel="noopener noreferrer">
                <button className='card--button'> Go To URL </button>
            </a> 
        </div>
    )

}

export default card;