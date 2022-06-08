import React from "react";
import preloader from '../../../assets/preload.svg'
import './Preloader.css';

const Preloader: React.FC = () => {
  return <div className='preloader'><img src={preloader} alt=""/></div>
}
export default Preloader