import React from 'react';
import PropTypes from "prop-types";

import "./style.scss";

import Checkbox from '../Checkbox';

const Exchange = ({exchangeData, handleChangeCheckbox, checkedItems, handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                <li>
                    <p>Name</p>
                    <p>Symbol</p>
                    <p>Currency</p>
                </li>
                {
                    exchangeData.map( (item, idx) => (
                       <li key={idx + item.name}>
                          <p>{item.name}</p>
                          <p>{item.symbol}</p>
                          <p>{item.currency}</p>
                          <Checkbox name={item.symbol} checked={checkedItems[item.symbol]} onChange={handleChangeCheckbox} />
                       </li>
                    ))
                }
            </ul>
            <input type="submit" value="Show selected exchanges" />
        </form>
    )
}

Exchange.propTypes = {
    exchangeData: PropTypes.array,
    handleChangeCheckbox: PropTypes.func,
    checkedItems: PropTypes.object,
    handleSubmit: PropTypes.func,
};

export default Exchange;


