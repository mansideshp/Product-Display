import React, { useEffect } from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { collect } from "../../Store/Slice";

const Productlist = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getVal() {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      dispatch(collect(result));
    }

    getVal();
  }, []);

  const getData = useSelector((state) => state.datalist);
  const Value = useSelector((state) => state.toggler);
  console.log(Value);
  function catfun() {
    const arr = getData.filter((e) => Value.includes(e.category));
    return (
      <>
        {arr.map((e) => {
          return (
            <div key={e.id} className="minicard">
              <div className="prodimagediv">
                <img className="prodimage" src={e.image} />
              </div>
              <div className="title">{e.title}</div>

              <div className="price">${e.price}</div>
            </div>
          );
        })}
      </>
    );
  }
  return (
    <>
      <div className="parentcard">
        <div className="card">
          {Value.length == 0
            ? getData.map((e) => {
                return (
                  <div key={e.id} className="minicard">
                    <div className="prodimagediv">
                      <img className="prodimage" src={e.image} />
                    </div>
                    <div className="title">{e.title}</div>

                    <div className="price">${e.price}</div>
                  </div>
                );
              })
            : catfun()}
        </div>
      </div>
    </>
  );
};

export default Productlist;
