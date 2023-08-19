import React, { useContext } from "react";
//assets
import Logo from "../Card2/Logo.svg";
//css
import "./Card2.css"
import Store from "../../context/store";

const Card2 = ({ card, cardData }) => {
  const { fileDataURL, setFileDataURL } = useContext(Store);
  return (
    <div className="cards">
      {/* first card */}
      <div
        className={card.firstCardContent.firstCard}
        style={{
          backgroundImage: `url(${card.firstCardContent.backGroundImage})`,
        }}
      >
        <div className="design-div">
          <img className="logo-img" src={`${fileDataURL || Logo}`} />
          <h3 className={card.firstCardContent.companyName}>
            {cardData.companyName
              ? cardData.companyName
              : card.firstCardContent.companyNameText}
          </h3>
          <p className={card.firstCardContent.companyNameSlogan}>
            {cardData.companySlogan
              ? cardData.companySlogan
              : card.firstCardContent.companyNameSloganText}
          </p>
          <p className={card.firstCardContent.companyNameLoremText}>
            {cardData.description
              ? cardData.description
              : card.firstCardContent.companyNameLoremTextContent}
          </p>
        </div>
        <p className="down-part-lorem"></p>
      </div>

      {/* second card */}
      <div
        className={card.secondCardContent.secondCard}
        style={{
          backgroundImage: `url(${card?.secondCardContent.backGroundImage})`,
        }}
      >
        <div className="company-info">
          <div className={card.secondCardContent.flexClassName}>
            <h2 className={card.secondCardContent.cardHolderName}>
              {cardData.name
                ? cardData.name
                : card.secondCardContent.cardHolderNameText}
            </h2>
            <span className={card.secondCardContent.cardHolderSurname}>
              {cardData.surname
                ? cardData.surname
                : card.secondCardContent.cardHolderSurnameText}
            </span>
          </div>
          <p className={card.secondCardContent.cardHolderOccupation}>
            {cardData.position
              ? cardData.position
              : card.secondCardContent.cardHolderOccupationText}
          </p>
        </div>
        <div className="address-div">
          <div className="diviconlist">
            {card.iconList.map((v) => {
              return (
                <>
                  <div key={v.id} />
                  <div className={`${v.className}`}>{v.icon}</div>
                </>
              );
            })}
          </div>
          <div>
            <p className={card.addressText[0].className}>
              {cardData.address ? cardData.address : card?.addressText[0].text}
            </p>
            <p className={card.addressText[1].className}>
              {cardData.phone ? cardData.phone : card.addressText[1].text}
            </p>
            <p className={card.addressText[2].className}>
              {cardData?.email ? cardData.email : card?.addressText[2].text}
            </p>
            <p className={card.addressText[3].className}>
              {cardData?.website ? cardData.website : card?.addressText[3].text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card2;
