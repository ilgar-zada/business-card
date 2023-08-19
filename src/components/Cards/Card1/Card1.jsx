import React, { useContext, useEffect, useState } from "react";

// ASSETS
import "./Card1.css";
import Store from "../../context/store";
import Logo from "../../Cards/Card1/logo1.svg"



const VisitCard = ({ card, animateCard1 }) => {
  const {
    cardData,
    selectedFile,
    setSelectedFile,
    fileDataURL,
    setFileDataURL,
    fontSize,
    setFontSize,
    name,
    setName,
    flexDirection,
  } = useContext(Store);
const [companyNameLines, setCompanyNameLines] = useState();
const [CardHolderName, setCardHolderName] = useState();
const [sloganText, setSloganText] = useState();
const [description, setDescription] = useState();
 useEffect(() => {
   const companyName =
     cardData.companyName || card.firstCardContent.companyNameText;
   const firstLine = companyName.slice(0, 30);
   const secondLine = companyName.slice(50);

   const name = cardData.name || card.secondCardContent.cardHolderNameText;
   const firstLine1 = name.slice(0, 10);
   const secondLine1 = name.slice(25);

   const companySlogan =
     cardData.companySlogan || card.firstCardContent.companyNameSloganText;
   const firstLine2 = companySlogan.slice(0, 35);
   const secondLine2 = companySlogan.slice(40);

   const description =
     cardData.description || card.firstCardContent.companyNameLoremContext;
   const firstLine3 = description.slice(0, 20);
   const secondLine3 = description.slice(40);

   setCompanyNameLines([firstLine, secondLine]);
   setCardHolderName([firstLine1, secondLine1]);
   setSloganText([firstLine2, secondLine2]);
   setDescription([firstLine3, secondLine3]);
 }, [
   cardData.companyName,
   card.firstCardContent.companyNameText,

   cardData.name,
   card.secondCardContent.cardHolderNameText,

   cardData.companySlogan,
   card.firstCardContent.companyNameSloganText,

   cardData.description,
   card.firstCardContent.companyNameLoremContext,
 ]);



  return (
    <div className="cards">
      {/* first card */}
      <div className={card.firstCardContent.firstCardBlog}>
        <img
          src={card.firstCardContent.backGroundImage}
          className={card.firstCardContent.firstCard}
        />
        <div
          className={card.firstCardContent.cardDesign}
          style={{ flexDirection: flexDirection ? "column" : "row" }}
        >
          <div className={card.firstCardContent.LogoBox}>
            <img
              value={selectedFile}
              className={card.firstCardContent.cardLogo}
              src={`${fileDataURL || Logo}`}
              alt=""
            />
          </div>
          <div>
            <div className={card.firstCardContent.companyName}>
              <h2 style={{ fontSize: fontSize + "px" }}>
                {companyNameLines?.map((line, index) => (
                  <span key={index} className="company-name-line">
                    {line}
                  </span>
                ))}
              </h2>
              <p className={card.firstCardContent.companyNameSlogan}>
                {" "}
                {sloganText?.map((line, index) => (
                  <span key={index} className="company-name-line">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
        <div className={card.firstCardContent.companyNameLoremTextBox}>
          <p className={card.firstCardContent.companyNameLoremText}>
            {description?.map((line, index) => (
              <span key={index} className="company-name-line">
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* second card */}
      <div className={card.secondCardContent.secondCardBlog}>
        <img
          src={card.secondCardContent.backGroundImage}
          className={card.secondCardContent.secondCard}
          alt=""
        />
        <div className={card.secondCardContent.informationBox}>
          <div className={card.secondCardContent.iconGroup}>
            {card.iconList.map((i, index) => {
              return (
                <div key={index}>
                  <div className={i.className} style={{ padding: "4px" }}>
                    {i.icon}
                  </div>
                </div>
              );
            })}
          </div>

          <div className={card.secondCardContent.iconInformation}>
            {
              <>
                <div key={card.contactList[0].id}>
                  <p style={card.contactList[0].customStyle || {}}>
                    {cardData.address
                      ? cardData.address
                      : card.contactList[0].text}
                  </p>
                </div>
                <div key={card.contactList[1].id}>
                  <p style={card.contactList[1].customStyle || {}}>
                    {cardData?.phone
                      ? cardData.phone
                      : card?.contactList[1].text}
                  </p>
                </div>{" "}
                <div key={card.contactList[0].id}>
                  <p style={card.contactList[0].customStyle || {}}>
                    {cardData?.email
                      ? cardData.email
                      : card.contactList[2].text}
                  </p>
                </div>{" "}
                <div key={card.contactList[0].id}>
                  <p style={card.contactList[0].customStyle || {}}>
                    {cardData?.website
                      ? cardData.website
                      : card.contactList[3].text}
                  </p>
                </div>{" "}
              </>
            }
          </div>
        </div>

        <div
          className={card.secondCardContent.cardHolderNameBox}
          style={{ flexDirection: flexDirection ? "column" : "row" }}
        >
          <p className={card.secondCardContent.cardHolderName}>
            {CardHolderName?.map((line, index) => (
              <span key={index} className="company-name-line">
                {line}
              </span>
            ))}
          </p>
          <b>
            {" "}
            <span className={card.secondCardContent.cardHolderSurNameText}>
              {cardData.surname
                ? cardData.surname
                : card.secondCardContent.cardHolderSurNameText}
            </span>
          </b>
          <p className={card.secondCardContent.cardHolderOccupation}>
            {cardData.position
              ? cardData.position
              : card.secondCardContent.cardHolderOccupationDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisitCard;