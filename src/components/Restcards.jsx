import IMG_CDN_URL from "./utils/cdnlinks";

const Restcard=(props)=>{
    const {resdata}=props;
   return( <div className="w-65 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer overflow-hidden">
        <img src={ resdata?.info?.cloudinaryImageId
            ? IMG_CDN_URL + resdata.info.cloudinaryImageId
            : "https://via.placeholder.com/300x200?text=No+Image"} className="w-full h-42.5 object-cover"></img>
        <h3 className="restname"> {resdata.info.name} </h3>
        <div className="extra">
            <h5>{resdata.info.cuisines.join(",")}</h5>
            <h5>{resdata.info.avgRating}</h5>
            <h5>{resdata.info.sla.deliveryTime}</h5>
        </div>
    </div>)

}
 export const Promotedrest= (Restcard)=>{
    return (props)=>{
        return (
            <div className="relative">
  <label className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
    PROMOTED
  </label>

  <Restcard {...props} />
  </div>

        )
    }
}
export default Restcard;