import React from 'react';
import PropTypes from "prop-types";

import "./style.scss";

const Quote = ({data}) => {
    return (
       <ul>
          {
            data.map( (item, idx) => (
                <li key={idx + item.symbol}>
                    <div className={'exchange_title exchange__center'}>
                      <h3>{item.symbol}</h3>
                      <p>{item.exhange}</p>
                    </div>

                    <div className={'exchange_price exchange__center'}>
                      <span>Price</span>
                      <p>{item.price} <span className={'currency'}>$</span></p>
                    </div>

                     <div className={'exchange_percentage exchange__center'}>
                        <span>Percentage</span>
                        <p className={(item.changesPercentage > 0) ? 'green' : 'red'}>{item.changesPercentage}%</p>
                     </div>
                </li>
            ))
          }
        </ul>
    )
}

Quote.propTypes = {
    data: PropTypes.array,
};

export default Quote;