import { useState, useEffect} from 'react';

export default function Loading (){
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        document.body.overflow = 'hidden';
        setTimeout(() => {
            setLoading(false);
            document.body.overflow = '';
        }, 1100);
    },[]);

    return (
        <div className={`loading flex-column aitems-center jcontent-center ${loading ? 'show-loading' : 'hide-loading'}`}>
                <h2 className="">Loading...</h2>
        </div>
    )
}