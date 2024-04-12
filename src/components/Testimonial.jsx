import React, { useState } from 'react';
import '../styles/testimonial.css';
import clients from '../user'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

const Testimonial = () => {
    const [index, setIndex] = useState(0)
    const { id, comment, image, name, job } = clients[index];
    const checkNumber = (num) => {
        if (num > clients.length - 1) {
            return 0;
        } if (num < 0) {
            return clients.length - 1;
        }
        return num;
    }

    // prev
    const prevPerson = () => [
        setIndex((index) => {
            return checkNumber(index - 1)
        })
    ]
    // next
    const nextPerson = () => {
        setIndex((index) => {
            return checkNumber(index + 1);
        })
    }
  return (
    <div className="testimonial">
      <div className="heading">
        <h3>Client Testimonial</h3>
        <h2>Adventure Ideas</h2>
        <div className="testimonial-main">
          <img src={image} alt={name} />
          <p> {comment} </p>
          <div className="btn-container">
            <button onClick={prevPerson}>
              <AiOutlineArrowLeft />
            </button>
            <button onClick={nextPerson}>
              <AiOutlineArrowRight />
            </button>
          </div>
          <h2> {name} </h2>
          <h3> {job} </h3>
        </div>
      </div>
    </div>
  );
}

export default Testimonial