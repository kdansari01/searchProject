import { useState } from "react";
import User from "../../assests/image/user.svg";
import "./card.css";
import SendOfferModal from "./Modal";
export const MobileCard = ({ name, price, deleveryTime, createdAt }) => {
  const [offerId, setOfferId] = useState("");

  return (
    <div className="card mt-3">
      <div className="d-flex justify-content-start app-container">
        <div className="border img-container d-flex justify-content-center align-items-center">
          <img src={User} alt="user" height="50%" className="svg-color" />
        </div>
        <div className="flex-1 px-3">
          <div className="d-flex justify-content-between">
            <h5 className="text-truncate">{name}</h5>
            <span className="text-muted fs-12">{createdAt}</span>
          </div>
          <div className="d-flex justify-content-between">
            <main className="d-flex">
              <section>
                <span className="text-muted text-sm">Price</span>
                <p>{price}₹/-</p>
              </section>
              <section className="mx-4">
                <span className="text-muted text-truncate">Delivery Time</span>
                <p className="d-time">{deleveryTime}</p>
              </section>
            </main>
            <button
              type="button"
              className="btn btn-dark text-truncate"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => setOfferId({ name })}
            >
              Send Offer
            </button>
            {offerId === { name } && <SendOfferModal />}
          </div>
        </div>
      </div>
    </div>
  );
};

MobileCard.defaultProps = {
  name: "Albert Einstin",
  price: 800,
  deleveryTime: "2 Days",
  createdAt: "2 Days Ago",
};
