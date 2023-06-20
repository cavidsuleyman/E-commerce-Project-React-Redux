import React from 'react'
import { Link } from 'react-router-dom';
import foto1 from '../assets/image/dashboard/slide1.png';
import foto2 from '../assets/image/dashboard/slide2.png';
import foto3 from '../assets/image/dashboard/slide3.png';
import foto4 from '../assets/image/dashboard/slide4.png';

const Dashboard = () => {
  return (
    <div className='slide-main'>
        <Link>
            <img src={foto1} alt="" />
        </Link>
        <Link>
            <img src={foto2} alt="" />
        </Link>
        <Link>
            <img src={foto3} alt="" />
        </Link>
        <Link>
            <img src={foto4} alt="" />
        </Link>
    </div>
  )
}

export default Dashboard