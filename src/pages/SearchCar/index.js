import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { category } from '../../jsonData/categoryList';
import { harga } from '../../jsonData/priceList';
import { status } from '../../jsonData/sewaList';
import { Footer, Header } from "../../components/organism";
import { getCars } from "../../redux/actions/posts";
import Loading from "../Loading/Search";
import Card from "./Card";
import SearchBox from "./SearchBox";

function SearchCar() {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const [ data2, setData ] = useState([])
  const dispatch = useDispatch()
  const URL = `https://bootcamp-rent-car.herokuapp.com/admin/car`
  const data_api = () => {
    axios.get(URL).then(res => {
      setData(res.data)
    })
  }
  useEffect(() => {
    window.scrollTo({
      top: 450,
      behavior: "smooth"
    })
    data_api()
    dispatch(getCars())
  }, [dispatch])

  const props = {
    category,
    harga,
    status,
    posts,
    data2
  }
  console.debug(posts);
  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Header />
      <SearchBox {...props} />
      <div className="flex justify-center dark:bg-gray-800 dark:text-white">
        <div className="w-full lg:w-4/5 grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {posts.length > 0 && posts?.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SearchCar;
