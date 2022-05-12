import React from "react";
import "./Cards.css";
import CardItem from "./Carditem";

function Cards() {
  return (
    <div className="cards">
      <h1>What we do best!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/public/images/img-1.jpg"
              text="We make it easy for your employees to order printers"
              label="Request Printer"
              path="/Assetrequest"
            />
            <CardItem
              src="/public/images/img-2.jpg"
              text="We make it easy for your employees to order laptops and computers"
              label="Request Laptop"
              path="/Assetrequest"
            />
            <CardItem
              src="/public/images/img-3.jpg"
              text="We make it easy for your employees to order stationery"
              label="Request Files"
              path="/Assetrequest"
            />
          </ul>
          {/* I paste the cards again inside ul tags so that the dont list themselves downwards */}
          <ul className="cards__items">
            <CardItem
              src="/public/images/img-2.jpg"
              text="We make it easy for your employees to order office electronics"
              label="Request Laptop"
              path="/Assetrequest"
            />
            <CardItem
              src="/public/img-5.jpg"
              text="We make it easy for your employees to order office furniture"
              label="Request Seat"
              path="/Assetrequest"
            />
            <CardItem
              src="/public/img-8.jpg"
              text="We make it easy for your employees to order call system items"
              label="Request Headphones"
              path="/employee"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
