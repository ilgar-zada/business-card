
import "./App.css";
//card1
import FrontFoto from "./components/Cards/Card1/FrontFoto192.png";
import BackFoto from "./components/Cards/Card1/BackFoto192.png";
import Logo from "./components/Cards/Card1/logo1.svg";
// card2
import FirstCard2 from "./components/Cards/Card2/FirstCard2.png";
import SecondCard2 from "./components/Cards/Card2/SecondCard2.png";
// card3
import CardFirst from "./components/Cards/Card3/CardFirst.png";
import CardSecond from "./components/Cards/Card3/CardSecond.png";
import {BrowserRouter, Route, Routes, } from "react-router-dom"

import Form from "./pages/Form.jsx"


import Store from "./components/context/store";
import { useState } from "react";
import {
  FaArrowPointer,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";


import Card1 from "./components/Cards/Card1/Card1"
import Card2 from "./components/Cards/Card2/Card2";
import Card3 from "./components/Cards/Card3/Card3";

function App() {
  const [selectedCard, setSelectedCard] = useState(0);
  const [cardData, setCardData] = useState([]);
  const [fileDataURL, setFileDataURL] = useState(null);
  const [fontSize, setFontSize] = useState(10)
  const [flexDirection, setFlexDirection] = useState(false)
  const [nameStatus, setNameStatus] = useState(false);
  const [name, setName] = useState("")

  const cards = [
    {
      firstCardContent: {
        firstCard: "first-card",
        backGroundImage: `../..${FrontFoto}`,
        companyName: "company-name3",
        companyNameStyle: "company-name-design",
        companyNameText: "Media",
        companyNameSlogan: "company-name-slogan",
        companyNameSloganText: "SLOGANHERE",
        companyNameLoremText: "lorem",
        companyNameLoremContext: "lorem ipsum dolor",
        cardDesign: "first-card-design",
        LogoContent: `../..${Logo}`,
        cardLogo: "card-first-card-logo",
        LogoBox: "card-first-card-logo-box",
        companyNameLoremTextBox: "company-name-lorem-text-box",
        firstCardBlog: "first-card-blog",
      },
      secondCardContent: {
        secondCard: "second-card",
        backGroundImage: `../..${BackFoto}`,
        divClassName: "company-info",
        cardHolderName: "card-holder-name1",
        cardHolderNameText: `THOMAS`,
        cardHolderSurNameText: "SMITH",
        cardHolderOccupation: "span-text",
        cardHolderOccupationText: "occupation",
        cardHolderOccupationDescription: "Graphic Designer",
        informationBox: "information-box",
        iconGroup: "icon-group",
        iconInformation: "icon-information1",
        cardHolderNameBox: "cardHolderNameBox",
        secondCardBlog: "second-card-blog",
      },
      contactList: [
        {
          id: 1,
          className: "down-part-lorem1",
          text: "123 Dummy, Lorem Ipsum",
          customStyle: { padding: "5px", fontWeight: "800" },
        },
        {
          id: 2,
          className: "down-part-number",
          text: "+00 1234 5XXX 9012",
          customStyle: { padding: "5px", fontWeight: "800" },
        },
        {
          id: 3,
          className: "down-part-email",
          text: "info@email space",
          customStyle: { padding: "5px", fontWeight: "800" },
        },
        {
          id: 4,
          className: "down-part-website",
          text: "www.websiteaddress",
          customStyle: { padding: "5px", fontWeight: "800" },
        },
      ],
      iconList: [
        {
          id: 1,
          className: "fa-location1",
          icon: <FaLocationDot />,
        },
        {
          id: 2,
          className: "fa-phone1",
          icon: <FaPhone />,
        },
        {
          id: 3,
          className: "fa-envelope1",
          icon: <FaEnvelope />,
        },
        {
          id: 4,
          className: "fa-arrow-pointer1",
          icon: <FaArrowPointer />,
        },
      ],
    },
    // card2

    {
      firstCardContent: {
        firstCard: "first-card2",
        backGroundImage: `../..${FirstCard2}`,
        companyName: "company-name",
        companyNameText: "Design",
        companyNameSlogan: "slogan1",
        companyNameSloganText: "Tagline space",
        companyNameLoremText: "down-part-lorem2",
        companyNameLoremTextContent: "Lorem Ipsum Dolor",
      },

      secondCardContent: {
        secondCard: "second-card2",
        backGroundImage: `../..${SecondCard2}`,
        DivclassName: "company-info",
        cardHolderName: "card-holder-name",
        cardHolderNameText: "MARK",
        cardHolderSurname: "card-holder-surname",
        cardHolderSurnameText: "Smith",
        cardHolderOccupation: "cofounder-p",
        cardHolderOccupationText: "Co-Founder Brand Name",
        flexClassName: "flex",
        foncticonClassName: "fonticon",
      },

      addressText: [
        {
          id: 1,
          className: "down-part-lorem1",
          text: "123 Dummy, Lorem Ipsum",
        },
        {
          id: 2,
          className: "down-part-number",
          text: "+00 1234 5XXX 9012",
        },
        {
          id: 3,
          className: "down-part-email",
          text: "info@email space",
        },
        {
          id: 4,
          className: "down-part-website",
          text: "www.websiteaddress",
        },
      ],
      iconList: [
        {
          id: 1,
          className: "fa-location-dot",
          icon: <FaLocationDot />,
        },
        {
          id: 2,
          className: "fa-phone",
          icon: <FaPhone />,
        },
        {
          id: 3,
          className: "fa-envelope",
          icon: <FaEnvelope />,
        },
        {
          id: 4,
          className: "fa-arrow-pointer",
          icon: <FaArrowPointer />,
        },
      ],
    },
    //card3

    {
      firstCardContent: {
        firstCardBlog: "first-card-blog",
        backGroundImage: `../..${CardFirst}`,
        companyName: "company-name",
        companyNameText: "Design",
        companyNameSlogan: "slogan",
        companyNameSloganText: "Tagline space",
        companyNameLorem: "lorem-text",
        companyNameLoremText: "Lorem Ipsum Dolor",
      },

      secondCardContent: {
        secondCardBlog: "second-card-blog",
        backGroundImage: `../..${CardSecond}`,
        divClassName: "name-class",
        cardHolderName: "card-holder-namee",
        cardHolderNameText: "MARK",
        cardHolderSurname: "card-holder-surnamee",
        cardHolderSurnameText: "Smith",
        cardHolderOccupation: "project-manager",
        cardHolderOccupationText: "Project Manager",
        flexClassName: "flex",
      },

      addressIcon: [
        {
          id: 1,
          className: "location-dot",
          icon: <FaLocationDot />,
        },
        {
          id: 2,
          className: "phone",
          icon: <FaPhone />,
        },
        {
          id: 3,
          className: "envelope",
          icon: <FaEnvelope />,
        },
        {
          id: 4,
          className: "arrow-pointer",
          icon: <FaArrowPointer />,
        },
      ],

      addressText: [
        {
          id: 1,
          className: "location-text",
          text: "123 Dummy, Lorem Ipsum",
        },

        {
          id: 2,
          className: "phone-text",
          text: "+00 1234 5XXX 9012",
        },

        {
          id: 3,
          className: "envelope-text",
          text: "info@email space",
        },
        {
          id: 4,
          className: "arrow-text",
          text: "www.websiteaddress",
        },
      ],
    },
  ];

  return (
    <>
      
      <Store.Provider
        value={{
          selectedCard,
          setSelectedCard,
          fileDataURL,
          setFileDataURL,
          cards,
          cardData,
          setCardData,
          fontSize,
          setFontSize,
          flexDirection,
          setFlexDirection,
          nameStatus,
          setNameStatus
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route
              path="/card1"
              element={<Card1 card={cards[selectedCard]} />}
            />
            <Route path="/card2" element={<Card2 card={cards[1]} />}></Route>
            <Route path="/card3" element={<Card3 card={cards[2]} />}></Route>
          </Routes>
        </BrowserRouter>
      </Store.Provider>
    </>
  );
}

export default App;