import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { baseUrl } from "../../api/api";
import getData from "../../context/getData";
import { DataProps } from "../../DataInterface/interface";
import Loading from "../FullScreenLoading/Loading";
import './style.css'

interface DataShorProps {
  category?: string
}

const DataShowElement:React.FC<DataShorProps> = ({ category }) => {
  const location = useLocation()
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    getData(baseUrl).then((data) => setData(data)).finally(() => setIsLoaded(true));
  }, []);
  

  if (!isLoaded) return <Loading />

  return (
    <div className="dataElementWrapper">
      <div className="cardsWrapper">
        {data && data.map((value: DataProps) => {
          if (category === value.category) {
            return (
              <div className="card" key={Math.random()}>

                <div className="cardImg">
                  <img src={`${value.image}`} className='img'/>
                </div>
                <div className="productTitle">
                  <NavLink to={`${location.pathname}/${value.id}`}>{value.title}</NavLink>
                </div>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
};

export default DataShowElement;
