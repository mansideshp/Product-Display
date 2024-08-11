import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Sidebar.css";
import { checked, unchecked, clearAll } from "../Store/Slice/FilterSlice";

const Sidebar = () => {
  const getData = useSelector((state) => state.datalist);
  const checkedCategories = useSelector((state) => state.toggler);
  const categories = getData
    .map((e) => e.category)
    .filter((e, i, arr) => arr.indexOf(e) == i);
  const dispatch = useDispatch();

  const clickMe = (e) => (event) => {
    if (event.target.checked) {
      dispatch(checked(e));
    } else {
      dispatch(unchecked(e));
    }
  };

  return (
    <div className="sidebar">
      <div className="head">
        <h3>Filter</h3>
        <p onClick={() => dispatch(clearAll("clear all"))}>Clear All</p>
      </div>
      <div className="scroll">
        <div className="heading">
          <h4>Category</h4>
          <ul className="displayli">
            {categories.map((e, i) => {
              return (
                <li key={i} className="displayul">
                  <input type="checkbox" onChange={clickMe(e)} checked={checkedCategories.includes(e)} />
                  <p className="displayproducts">{e}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <hr />
        <div className="heading">
          <h4>Category</h4>

          <ul className="displayli">
            {categories.map((e, i) => {
              return (
                <li key={i} className="displayul">
                  <input type="checkbox" />
                  <p className="displayproducts">{e}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <hr />
        <div className="heading">
          <h4>Category</h4>

          <ul className="displayli">
            {categories.map((e, i) => {
              return (
                <li key={i} className="displayul">
                  <input type="checkbox" />
                  <p className="displayproducts">{e}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Sidebar;
