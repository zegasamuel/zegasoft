import React from 'react';
import { Link } from 'react-router-dom';


const Logo = ({limage, dimage, simage}) => {
    return (
        <Link to={process.env.PUBLIC_URL + "/"}>
            <img style={{width: '270px'}} className="light-version-logo" src={process.env.PUBLIC_URL + limage} alt="logo" />
            <img style={{width: '270px'}} className="dark-version-logo" src={process.env.PUBLIC_URL + dimage} alt="logo" />
            <img style={{width: '150px'}} className="sticky-logo" src={process.env.PUBLIC_URL + limage} alt="logo" />
        </Link>
    )
}


export default Logo;