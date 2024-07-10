export default function ImageTextHorizontalCard({imgSrc, title, description, img2nd, isMobile}){
    return(
        <div className={`img-text-hz-card ${img2nd ? "flex-row-reverse": `${ isMobile ? 'flex-column' : 'flex-row'}`} aitems-center jcontent-space-around`}>
            <img className='item-image' src={imgSrc} />
            <div className='flex-column flex-grow-4 flex-shrink-1'>
                <h4 className={`flex-grow-1 flex-shrink-4 ${isMobile ? 'aself-center': ''}`}>{title}</h4>
                <p className="flex-grow-4 flex-shrink-1">{description}</p>
            </div>
        </div>
    );
}