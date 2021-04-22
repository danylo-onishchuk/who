/* eslint-disable react/prop-types */
import React from 'react';
import './endPage.css';

interface EndPageProps {
  finalScore: string,
}

export const EndPage: React.FC<EndPageProps> = ({ finalScore }) => {
  const goStart = () => {
    window.location.href = './who';
  };

  window.history.pushState(null, 'null', window.location.href);
  window.onpopstate = function event() {
    window.history.go(1);
  };

  return (
    <div className="endPage">
      <img
        className="endPage__picture"
        src="./images/hand.svg"
        alt="hand"
      />
      <div className="endPage__content">
        <h1>
          {finalScore}
          &nbsp;
          earned
        </h1>
        <button
          type="button"
          className="endPage__button"
          onClick={goStart}
        >
          Try again
        </button>
      </div>
    </div>
  );
};
