import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-ui-kit/css/mdb.min.css";
import "mdb-ui-kit/js/mdb.min.js";
import "./search_main.css";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";

const Search_main = (props) => {
  const dispatch = useDispatch();
  const pictures = useSelector((state) => state.picture.picture);
  const types = useSelector((state) => state.type.type);
  const brands = useSelector((state) => state.brand.brand);
  const [selectedType,setSelectedType]=useState("")
  const [selectedTypeID,setSelectedTypeID]=useState("")
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedBrandID, setSelectedBrandID] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [selectedSearch, setSelectedSearch]=useState("")
  let selected=[]
  let search=""
  
  const handlerReset = () => {
    setSelectedType("");
    setSelectedBrand("");
    setSelectedTypeID("");
    setSelectedBrandID("");
    setSelectedName("");
    setSelectedSearch("")
    selected=[]
    props.onSearch(selected,search)
  };
  const handlerSearch =  () => {
    
    selected=[selectedName, selectedTypeID, selectedBrandID]
    props.onSearch(selected, search)
  };
  const handlerSort =  (params) => {
    selected=[selectedName, selectedTypeID, selectedBrandID]
    const search=params
    props.onSearch(selected,search)
  };
  return (
    <section className="intro">
      <div className="mask d-flex align-items-center h-100">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
             
              <div className="card" style={{ backgroundColor: "#edeaea" }}>
                <div className="card-body p-4">
                  <h5
                    className="text-uppercase mt-3 mb-4"
                    style={{ color: "#A38495" }}
                  >
                    Расширенный поиск
                  </h5>
                                    
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <div className="dropdown">
                        <button
                          className="btn btn-light btn-rounded btn-lg btn-block dropdown-toggle"
                          role="button"
                          type="button"
                          id="dropdownMenuButton"
                          data-mdb-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {selectedName?selectedName:"Название картины"}
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuLink1"
                        >
                          {pictures.map((picture, index) => {
                            return (
                              <li>
                                <a
                                  className="dropdown-item"
                                  key={index}
                                  onClick={() => {
                                    setSelectedName(picture.name);
                                  }}
                                >
                                  {picture.name}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="dropdown">
                        <a
                          className="btn btn-light btn-rounded btn-lg btn-block dropdown-toggle"
                          href="#"
                          role="button"
                          id="dropdownMenuLink1"
                          data-mdb-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {selectedType?selectedType:"Тип картины"}
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuLink1"
                        >
                          {types.map((type, index) => {
                            return (
                              <li>
                                <a
                                  className="dropdown-item"
                                  key={index}
                                  onClick={() => {
                                    setSelectedTypeID(type.id)
                                    setSelectedType(type.name);
                                  }}
                                >
                                  {type.name}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-4 mb-3">
                      <div className="dropdown">
                        <a
                          className="btn btn-light btn-rounded btn-lg btn-block dropdown-toggle"
                          href="#"
                          role="button"
                          id="dropdownMenuLink3"
                          data-mdb-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {selectedBrand?selectedBrand:"Бренд"}
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuLink1"
                        >
                          {brands.map((brand, index) => {
                            return (
                              <li>
                                <a
                                  className="dropdown-item"
                                  key={index}
                                  onClick={() => {
                                    setSelectedBrand(brand.name);
                                    setSelectedBrandID(brand.id)
                                  }}
                                >
                                  {brand.name}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                  <Dropdown style={{ display:'flex', alignSelf:'center'}}>
          <Dropdown.Toggle id="dropdown-basic" style={{
                 background: "linear-gradient(to right, #cffb0b, #057621)",
                color: "white",
                borderRadius: "10px",
              }}>
            Сортировать по
          </Dropdown.Toggle>

          <Dropdown.Menu >
            <Dropdown.Item onClick={()=>handlerSort("cu")}>Возрастанию цены</Dropdown.Item>
            <Dropdown.Item onClick={()=>handlerSort("cd")}>Убыванию цены</Dropdown.Item>
           </Dropdown.Menu>
        </Dropdown>
                    <div>
                      <button
                        onClick={handlerReset}
                        type="button"
                        className="btn btn-link text-pink btn-rounded"
                        data-mdb-ripple-color="dark"
                      >
                        Сбросить
                      </button>
                      <button
                      onClick={handlerSearch}
                        type="button"
                        className="btn btn-rounded purple-gradient text-white"
                      >
                        Поиск
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search_main;
