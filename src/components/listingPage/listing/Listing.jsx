import React from "react";
import style from "./style.module.css";
import {
  ListingMarkSvg,
  ListingBedSvg,
  ListingFrameSvg,
  ListingPostalCodeSvg,
} from "../../../assets/common/svg/listing";
import { Link } from "react-router-dom";

const Listing = ({
  address,
  area,
  bedrooms,
  city,
  id,
  image,
  is_rental,
  price,
  zip_code,
}) => {
  return (
    <Link to={`/listing/${id}`} className={`${style.listing} `}>
      <div className={`${style.listingImage} `}>
        <img src={image} alt="listing-image" />
        <span>{is_rental ? "ქირავდება" : "იყიდება"}</span>
      </div>
      <div className={`${style.listingItemInfos} `}>
        <h3>{price} ₾</h3>
        <div className={`${style.listingAddress} `}>
          <span>
            <ListingMarkSvg />
          </span>
          <p>
            {city.name}, {address}
          </p>
        </div>

        <div className={`${style.listingInfo} `}>
          <div className={`${style.listingInfoItem} `}>
            <span>
              <ListingBedSvg />
            </span>
            <p>{bedrooms}</p>
          </div>
          <div className={`${style.listingInfoItem} `}>
            <span>
              <ListingFrameSvg />
            </span>
            <p>{area} მ²</p>
          </div>
          <div className={`${style.listingInfoItem} `}>
            <span>
              <ListingPostalCodeSvg />
            </span>
            <p>{zip_code}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Listing;
