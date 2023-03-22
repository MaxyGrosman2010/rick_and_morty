import {useLocation} from 'react-router-dom';

export default function Error(){

    const location = useLocation();

    return (
        <div>
            <p>Error 404</p>
        </div>
    );
}