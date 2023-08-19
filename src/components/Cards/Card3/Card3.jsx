import React, { useContext, useEffect, useState } from "react";
//css
import "./Card3.css";
//assets
import CardFirst from "../Card3/CardFirst.png";
import CardSecond from "../Card3/CardSecond.png";
import CardLogo from "../Card3/CardLogo.svg";
import Store from "../../context/store";
import { alignProperty } from "@mui/material/styles/cssUtils";
const Card3 = ({ card3, cardData }) => {
  const { selectFile, fileDataURL, fontSize, nameStatus } = useContext(Store);
  const [companyNameLines3, setCompanyNameLines3] = useState([]);
  const [companySloganLines, setCompanySloganLines] = useState([]);
  const [companyLorems, setCompanyLorems] = useState([]);
  const [positionPart, setPositionPart] = useState([]);

  useEffect(() => {
    const companyName =
      cardData.companyName || card3.firstCardContent.companyNameText;
    const firstLine = companyName.slice(0, 16);
    const secondLine = companyName.slice(16);

    const companySlogan =
      cardData.companySlogan || card3.firstCardContent.companyNameSloganText;
    const firstLine1 = companySlogan.slice(0, 16);
    const secondLine1 = companySlogan.slice(16);

    const description =
      cardData.description || card3.firstCardContent.companyNameLoremText;
    const firstLine2 = description.slice(0, 18);
    const secondLine2 = description.slice(18);

    const position =
      cardData.position || card3.secondCardContent.cardHolderOccupationText;
    const firstLine3 = position.slice(0, 28);
    const secondLine3 = position.slice(28);

    setCompanyNameLines3([firstLine, secondLine]);
    setCompanySloganLines([firstLine1, secondLine1]);
    setCompanyLorems([firstLine2, secondLine2]);
    setPositionPart([firstLine3, secondLine3]);
  }, [
    cardData.companyName,
    card3.firstCardContent.companyNameText,
    cardData.companySlogan,
    card3.firstCardContent.companyNameSloganText,
    cardData.description,
    card3.firstCardContent.companyNameLoremText,
    cardData.position,
    card3.secondCardContent.cardHolderOccupationText,
  ]);
  return (
    <>
      <div className="cards">
        <div className={card3.firstCardContent.firstCardBlog}>
          <img
            style={{ width: "400px", height: "230px" }}
            src={card3.firstCardContent.backGroundImage}
            alt=""
          />
          <div className="text-general">
            <img
              src={`${fileDataURL || CardLogo}`}
              alt=""
              className="card-logo"
              value={selectFile}
            />
            <h1 className={card3.firstCardContent.companyName}>
              {companyNameLines3.map((line, index) => (
                <span key={index} className="company-name-line">
                  {line}
                </span>
              ))}
              {/* {cardData.companyName
                ? cardData.companyName
                : card3.firstCardContent.companyNameText} */}
            </h1>
            <h5 className={card3.firstCardContent.companyNameSlogan}>
              {companySloganLines.map((line, index) => (
                <span key={index} className="company-name-line">
                  {line}
                </span>
              ))}
              {/* {cardData.companySlogan
                ? cardData.companySlogan
                : card3.firstCardContent.companyNameSloganText} */}
            </h5>
            <p className={card3.firstCardContent.companyNameLorem}>
              {companyLorems.map((line, index) => (
                <span key={index} className="company-name-line">
                  {line}
                </span>
              ))}
              {/* {cardData.description
                ? cardData.description 
                : card3.firstCardContent.companyNameLoremText} */}
            </p>
          </div>
        </div>
        <div className={card3.secondCardContent.secondCardBlog}>
          <img
            style={{ width: "400px", height: "230px" }}
            src={card3.secondCardContent.backGroundImage}
            alt=""
          />
          <div className="name-div">
            <div
              className={card3.secondCardContent.divClassName}
              style={{ flexDirection: nameStatus ? "column" : "row" }}
            >
              <h2 className={card3.secondCardContent.cardHolderName}>
                {cardData.name
                  ? cardData.name
                  : card3.secondCardContent.cardHolderNameText}
              </h2>
              <h2 className={card3.secondCardContent.cardHolderSurname}>
                {cardData.surname
                  ? cardData.surname
                  : card3.secondCardContent.cardHolderSurnameText}
              </h2>
            </div>
            <p className={card3.secondCardContent.cardHolderOccupation}>
              {positionPart.map((line, index) => (
                <span key={index} className="company-name-line">
                  {line}
                </span>
              ))}

              {/* {cardData.position
                ? cardData.position
                : card3.secondCardContent.cardHolderOccupationText} */}
            </p>
          </div>

          <div className="address-list">
            <div className="address-icon">
              {card3.addressIcon.map((i) => {
                return (
                  <>
                    <div key={i.id} />
                    <div className={`${i.className}`}>{i.icon}</div>
                  </>
                );
              })}
            </div>

            <div>
              <p
                className="location-text"
                style={{ fontSize: fontSize + "px" }}
              >
                {cardData?.address
                  ? cardData.address
                  : card3.addressText[0].text}
              </p>
              <p className="phone-text" style={{ fontSize: fontSize + "px" }}>
                {cardData?.phone ? cardData.phone : card3.addressText[1].text}{" "}
              </p>
              <p
                className="envelope-text"
                style={{ fontSize: fontSize + "px" }}
              >
                {cardData?.email ? cardData.email : card3.addressText[2].text}
              </p>

              <p className="arrow-text" style={{ fontSize: fontSize + "px" }}>
                {cardData?.website
                  ? cardData.website
                  : card3.addressText[3].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card3;
