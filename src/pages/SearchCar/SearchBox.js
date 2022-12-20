import React from 'react'
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import './style.css'
import { carList } from '../../jsonData/carList';
import { Button } from '../../components/atoms';
import { getCarsBySearch } from '../../redux/actions/posts';
import Selects from './Selects';

const SearchBox = (props) => {
  const { id } = useParams()
  const { posts } = useSelector((state) => state.posts);
  const { category, harga, status, data2 } = props
  const dispatch = useDispatch()
  const [search, setSearch] = useState({
    name: '',
    category: '',
    price: '',
    status: ''
  })

  const car = carList;

  const handleSearch = (e) => {
    const data = []
    e.preventDefault()
    data2.filter(item =>
      item.name === search.name || item.category === search.category
      || item.price === search.price || item.status === search.status
    ).map((item) => (
      data.push(item))
    )
    dispatch(getCarsBySearch(data))
  }

  return (
    <div className={`${id !== undefined ? 'lg:mt-14' : 'lg:-mt-0'} dark:bg-gray-800 ml-5 mr-5 mt-14 lg:ml-0 lg:mr-0 flex justify-center pb-12`}>
      <div className={`dark:bg-gray-800 dark:text-white relative flex w-full md:w-10/12 flex-col xl:flex-row lg:w-9/12 xl:w-3/4 gap-4 bg-white ${id !== undefined ? 'py-14' : 'py-8'} px-7 border rounded-md lg:-mt-5 xl:-mt-10 shadow-md`}>
        {id !== undefined ? (<h2 className="font-bold absolute left-7 top-1 mt-3">Pencarianmu</h2>) : ''}
        
        <Selects label="Nama Mobil" placeholder={"Ketik nama mobil"} setSearch={setSearch} options={car} search={search} value={posts.name} id={id}/>
        <Selects label="Kategori" placeholder={"Kapasitas Mobil"} setSearch={setSearch} options={category} search={search} value={posts.category} id={id}/>
        <Selects label="Harga" placeholder={"Harga"} setSearch={setSearch} options={harga} search={search} value={'Rp. ' + posts.price} id={id}/>
        <Selects label="Status" placeholder={"Status"} setSearch={setSearch} search={search} options={status} value={posts.status === false ? 'Belum Disewa' : 'Disewa'} id={id}/>

        <div className="w-full md:w-full xl:w-1/2 mb-6 md:mb-0">
          <div className="relative flex">
            {id !== undefined ?
              (
                <Button name_btn={'Edit'} cls={'w-full mt-6 outline hover:outline-blue-600 outline-blue-400 text-blue-500'} href={'/search'} />
              )
              :
              (<button
                type='submit'
                className='text-white p-2 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-900 rounded-md font-bold bg-green-500 w-full hover:bg-green-600'
                onClick={handleSearch}
                style={{ marginTop: '26px' }}
              >
                Cari Mobil</button>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchBox;
