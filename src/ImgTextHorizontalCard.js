export default function ImageTextHorizontalCard({imgSrc, title, description}){
    return(
        <div className="flex-row aitems-center jcontent-space-around w100perc flex-grow-1">
            <img className='passion-image flex-grow-1 flex-shrink-3' src={imgSrc}></img>
            <div className='flex-grow-3 flex-shrink-1'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}