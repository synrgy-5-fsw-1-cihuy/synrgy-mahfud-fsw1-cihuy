import NumberFormat from "react-number-format";
import { Button } from "../../../components/atoms";
import imgnotfound from "../../../assets/img_not_available.png";

const Card = ({ item }) => {
  return (
    <div className="flex justify-center items-center lg:items-stretch">
      <div className="w-full mb-12 lg:mb-0 max-w-xl lg:max-w-sm border-gray-100 border rounded-lg shadow-lg overflow-hidden py-0 px-5 hover:bg-slate-50 dark:hover:bg-gray-700">
        <div className="h-1/3 mb-20 lg:mb-4 pt-5">
          {item.image ? (
            <img src={item.image} className="" alt="gambar" />
          ) : (
            <img src={imgnotfound} alt="no available" />
          )}
        </div>
        <div className="">
          <div className="font-bold text-xl mb-2 mt-10">{item.name}</div>
          <div className="font-bold text-xl mb-2">
            <NumberFormat
              value={item.price}
              prefix="Rp "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
            &nbsp;/ Hari
          </div>
          <p className="text-gray-700 dark:text-white text-base mb-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <Button name_btn={"Pilih Mobil "} cls={"w-full dark:bg-gray-700 dark:hover:bg-gray-600 bg-green-500 w-full hover:bg-green-600 mb-10 lg:mb-0"} href={`/search/${item.id}`} />
      </div>
    </div>
  );
};

export default Card;
