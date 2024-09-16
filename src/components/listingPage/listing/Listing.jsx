import React from "react";
import style from "./style.module.css";
import {
  ListingMarkSvg,
  ListingBedSvg,
  ListingFrameSvg,
  ListingPostalCodeSvg,
} from "../../../assets/common/svg/listing";
import listImg from "../../../assets/images/listImg.png";
import { Link } from "react-router-dom";

const Listing = ({}) => {
  return (
    <Link to={"#"} className={`${style.listing} `}>
      <div className={`${style.listingImage} `}>
        <img src={listImg} alt="listing-image" />
        <span>ქირავდება</span>
      </div>
      <div className={`${style.listingItemInfos} `}>
        <h3>80 000 ₾</h3>
        <div className={`${style.listingAddress} `}>
          <span>
            <ListingMarkSvg />
          </span>
          <p>თბილისი, ი. ჭავჭავაძის 53</p>
        </div>

        <div className={`${style.listingInfo} `}>
          <div className={`${style.listingInfoItem} `}>
            <span>
              <ListingBedSvg />
            </span>
            <p>2</p>
          </div>
          <div className={`${style.listingInfoItem} `}>
            <span>
              <ListingFrameSvg />
            </span>
            <p>55 მ²</p>
          </div>
          <div className={`${style.listingInfoItem} `}>
            <span>
              <ListingPostalCodeSvg />
            </span>
            <p>0160</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Listing;
