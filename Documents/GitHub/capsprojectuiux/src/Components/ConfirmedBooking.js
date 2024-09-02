import { Link, useLocation } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();
  const { date, firstName, lastName, email, phone, time, occasion, guests, reserveNumber } = state;


  function upperCase(word) {
    const original = [...word];
    return original[0].toUpperCase() + original.slice(1).join('');
  };

  return (
    <>
      <div className="reserve">
        <h2>Table reserved at the Chicago Branch!</h2>
        <p>We have received your reservation with the following information:</p>
        <div className="details">
          <ul>
            <li>Reservation number:</li>
            <li>Full Name:</li>
            <li>Phone Number:</li>
            <li>Reservation date:</li>
            <li>Reservation time:</li>
            <li>Number of People:</li>
            <li>Occasion:</li>
          </ul>
          <ul>
            <li><b>000-{reserveNumber}-123</b></li>
            <li>{upperCase(firstName)} {upperCase(lastName)}</li>
            <li>{phone}</li>
            <li>{date}</li>
            <li>{time}</li>
            <li>{guests}</li>
            <li>{occasion}</li>
          </ul>
        </div>
        <p>Order details has been sent to: <b><i>{email}</i></b></p>
        <br/>
        <Link to="/Reservations" rel="href" aria-label="Go back to Booking page">Go Back</Link>
      </div>
    </>
  )
};