import React, { useState } from "react";
import style from "./style.module.css";
import axios from "axios";
import { useQuery, useMutation } from "react-query";
import {
  ListingMarkSvg,
  ListingBedSvg,
  ListingFrameSvg,
  ListingPostalCodeSvg,
  LeftArrow,
} from "../../assets/common/svg/listing";
import AgentInfo from "./AgentInfo";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import SimilarListingSlider from "./similarListingSlider/SimilarListingSlider";
import { useNavigate, useParams } from "react-router-dom";

const ListingInfoPage = () => {
  const [deleteAgent, setDeleteAgent] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const options = {
    method: "GET",
    url: `https://api.real-estate-manager.redberryinternship.ge/api/real-estates/${id}`,

    headers: {
      accept: "application/json",
      Authorization: "Bearer 9d04c1f4-4b69-4c2e-923a-e717ad5764fc",
    },
  };

  const { data, isLoading, isError, isFetched } = useQuery(
    ["getCurrentRealEstate", id],
    async () => {
      try {
        const response = await axios.request(options);

        return response.data;
      } catch (error) {
        console.error("Error fetching featured products", error);
        throw new Error("Error fetching featured products");
      }
    }
  );

  if (isLoading) {
    return <div>...loading</div>;
  }

  const dateString = "2024-09-18T00:51:59.000000Z"; // Your original date
  const date = new Date(dateString); // Create Date object

  // Extract month, day, and year in the desired format
  const formattedDate = `${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${date
    .getDate()
    .toString()
    .padStart(2, "0")}/${date.getFullYear().toString().slice(-2)}`;

  // const mutation = useMutation((data) => {
  //   return axios.post(
  //     "https://api.real-estate-manager.redberryinternship.ge/api/agents",
  //     data,
  //     {
  //       headers: {
  //         Authorization: "Bearer 9d04c1f4-4b69-4c2e-923a-e717ad5764fc",
  //       },
  //     }
  //   );
  // });

  const deleteListHandler = (id) => {
    console.log(id);
  };

  return (
    <>
      {deleteAgent && (
        <Modal
          setDeleteAgent={setDeleteAgent}
          hideButtons={false}
          submitClick={deleteListHandler}
        >
          <p>გსურთ წაშალოთ ლისტინგი?</p>
        </Modal>
      )}
      <section className={`${style.listingInfoPage} `}>
        <div className={`${style.listingImage} `}>
          <div
            className={`${style.backArrowIcon} `}
            onClick={() => navigate("/")}
          >
            <LeftArrow />
          </div>
          <img src={data.image} alt="listing-image" />
          <span>{data?.is_rental ? "ქირავდება" : "იყიდება"}</span>
        </div>
        <div className={`${style.listingItemInfos} `}>
          <h3>{data?.price.toLocaleString("en-US")} ₾</h3>
          <div className={`${style.listingAddress} `}>
            <span>
              <ListingMarkSvg />
            </span>
            <p>
              {data.city.name}, {data?.address}
            </p>
          </div>

          <div className={`${style.listingInfo} `}>
            <div className={`${style.listingInfoItem} `}>
              <span>
                <ListingFrameSvg />
              </span>
              <p>ფართი {data?.area} მ²</p>
            </div>

            <div className={`${style.listingInfoItem} `}>
              <span>
                <ListingBedSvg />
              </span>
              <p>საძინებელი {data?.bedrooms}</p>
            </div>

            <div className={`${style.listingInfoItem} `}>
              <span>
                <ListingPostalCodeSvg />
              </span>
              <p> საფოსტო ინდექსი {data?.zip_code}</p>
            </div>
          </div>

          <div className={style.listingDesription}>{data?.description}</div>

          <AgentInfo agent={data?.agent} />

          <Button
            className={style.deleteBtn}
            onClick={() => setDeleteAgent((prevState) => !prevState)}
          >
            ლისტინგის წაშლა
          </Button>
        </div>
        <p className={style.listingInfoDate}>
          გამოქვეყნების თარიღი <span>{formattedDate}</span>
        </p>
      </section>
      {/* <SimilarListingSlider  region={data?.city.region.name} region={data?.city.region.id} /> */}
    </>
  );
};

export default ListingInfoPage;
