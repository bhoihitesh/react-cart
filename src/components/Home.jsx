import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { add } from "../features/CartReducer";
import { useGetDataQuery } from "../features/Cartslice";
const Home = () => {
  let { data, isLoading } = useGetDataQuery();
  let dispatch = useDispatch();
  const [ApiData, setApiData] = useState([]);

  useEffect(() => {
    {
      isLoading ? "" : setApiData(data);
    }
  }, [isLoading]);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {ApiData.map((e, i) => {
            return (
              <>
                <div className="col-lg-4 col-md-6 col-sm-12" key={e.id}>
                  <div className="card">
                    <div className="card-title">
                      <h2>{e.user}</h2>
                    </div>
                    <div className="card-body">
                      <h4>{e.product}</h4>
                      <Link to="cart">
                        <button
                          className="btn btn-primary me-1"
                          onClick={() => dispatch(add(e))}
                        >
                          Add
                        </button>
                      </Link>
                      <button className="btn btn-success">Buy</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
