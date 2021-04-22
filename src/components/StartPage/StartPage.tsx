import React from 'react';
import { Link } from 'react-router-dom';
import './startPage.css';

export const StartPage: React.FC = () => (
  <div className="startPage">
    <img
      className="startPage__picture"
      src="./images/hand.svg"
      alt="hand"
    />
    <div className="startPage__content">
      <h1>
        Who wants to be a millionaire?
      </h1>
      <Link to="/game" className="startPage__button">
        Start
      </Link>
    </div>
  </div>
);
