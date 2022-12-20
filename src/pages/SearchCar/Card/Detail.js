import React from 'react'
import { useEffect } from "react";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Footer, Header } from "../../../components/organism";
import { getCarsById } from "../../../redux/actions/posts";
import SearchBox from "../SearchBox";
import { FaUserFriends } from "react-icons/fa";
import imgnotfound from '../../../assets/img_not_available.png'
import Accordion from "./Accordion";
import Loading from "../../Loading/Search";

const Detail = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    dispatch(getCarsById(id));
  }, [id, dispatch]);

  const props = [
    posts
  ]
  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <Header />
      <SearchBox {...props} />
      <div className="flex justify-center items-center gap-4 dark:bg-gray-800 dark:text-white">
        <div className="flex flex-col-reverse justify-center items-center lg:items-start lg:px-4 lg:flex-row w-full lg:w-3/4 lg:gap-5">

          <Accordion />

          <div className="w-11/12 lg:w-1/2 mt-0 border-2 rounded-md p-5">
            <div>
              {posts.image ? (
                <img src={posts.image} alt="" className="mt-4" />
              ) : (
                <img src={imgnotfound} alt="no available" />
              )}
            </div>
            <p className="font-bold uppercase text-2xl mt-7">{posts.name}</p>
            <p className="mt-1 flex gap-2 font-bold text-gray-400">
              <p className="mt-1">
                <FaUserFriends />
              </p>
              <p>{posts.category}</p>
            </p>

            <div className="flex justify-between mb-14 mt-10">
              <p className="font-bold">Total</p>
              <p className="font-bold">
                <NumberFormat
                  value={posts.price}
                  prefix=": Rp "
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
