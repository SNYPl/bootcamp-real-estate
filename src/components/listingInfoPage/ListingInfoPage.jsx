import React, { useState } from "react";
import style from "./style.module.css";
import Listing from "../listingPage/listing/Listing";
import axios from "axios";
import { useQuery } from "react-query";
import {
  ListingMarkSvg,
  ListingBedSvg,
  ListingFrameSvg,
  ListingPostalCodeSvg,
} from "../../assets/common/svg/listing";
import listImg from "../../assets/images/listInfo.png";
import AgentInfo from "./AgentInfo";
import Button from "../button/Button";
import Modal from "../modal/Moda";

const ListingInfoPage = () => {
  const [deleteAgent, setDeleteAgent] = useState(false);
  // const options = {
  //   method: "GET",
  //   url:
  //     "https://api.real-estate-manager.redberryinternship.ge/api/real-estates",
  //   headers: {
  //     accept: "application/json",
  //     Authorization: "Bearer 9d04c1f4-4b69-4c2e-923a-e717ad5764fc",
  //   },
  // };

  // const { data, isLoading, isError, isFetched } = useQuery(
  //   ["getAllRealEstate"],
  //   async () => {
  //     try {
  //       const response = await axios.request(options);

  //       return response.data;
  //     } catch (error) {
  //       console.error("Error fetching featured products", error);
  //       throw new Error("Error fetching featured products");
  //     }
  //   }
  // );

  // console.log(data);

  return (
    <>
      {deleteAgent && (
        <Modal setDeleteAgent={setDeleteAgent}>გსურთ წაშალოთ ლისტინგი?</Modal>
      )}
      <section className={`${style.listingInfoPage} `}>
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
                <ListingFrameSvg />
              </span>
              <p>ფართი 55 მ²</p>
            </div>

            <div className={`${style.listingInfoItem} `}>
              <span>
                <ListingBedSvg />
              </span>
              <p>საძინებელი 2</p>
            </div>

            <div className={`${style.listingInfoItem} `}>
              <span>
                <ListingPostalCodeSvg />
              </span>
              <p> საფოსტო ინდექსი 0160</p>
            </div>
          </div>

          <div className={style.listingDesription}>
            იყიდება ბინა ჭავჭავაძის ქუჩაზე, ვაკეში. ბინა არის ახალი რემონტით,
            ორი საძინებლითა და დიდი აივნებით. მოწყობილია ავეჯითა და ტექნიკით.
          </div>

          <AgentInfo />

          <Button
            className={style.deleteBtn}
            onClick={() => setDeleteAgent((prevState) => !prevState)}
          >
            ლისტინგის წაშლა
          </Button>
        </div>
      </section>
    </>
  );
};

export default ListingInfoPage;
