import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { baseUrl } from "../../api/api";
import getData from "../../context/getData";
import Loading from "../FullScreenLoading/Loading";
import "./style.css";

const OneProduct = () => {
  const params = useParams();
  const [singleData, setSingleData] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    getData(`${baseUrl}/${params.id}`).then((singleData) =>
      setSingleData(singleData)
    )
    .then(() => setIsLoaded(true))
  }, []);

  if (!isLoaded) return <Loading />

  return (
    <div className="single_product_container">
      <h1>{singleData?.title}</h1>

      <div className="single_product">
        <div className="img_container">
          <img src={singleData?.image} />
        </div>
        <div className="desc_container">
          <div>
            <h2>{singleData?.price}$</h2>
            <br />
          </div>
          <h2>Description</h2>
          <br />
          <span>{singleData?.description}</span>
        </div>
      </div>
    </div>
  );
};

export default OneProduct;
