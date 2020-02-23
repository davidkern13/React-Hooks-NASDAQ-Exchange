import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import ExchangeComponent from '../../components/Exchange';

import { callQuoteSaga  } from '../../store/quote/actions';
import { createStringFromObject  } from '../../utils';

import _ from 'lodash';

const Exchange = () => {

    const exchange_store_data = useSelector(state => state.exchange);
    const dispatch = useDispatch();

    const [checkedItems, setCheckedItems] = useState({});
    const [exchangeData, setExchangeData] = useState([]);
    const [error, setError] = useState(false);

     useEffect( () => {
        let { data = [] } = exchange_store_data;
        setExchangeData(data);
     }, [exchange_store_data, checkedItems]);

     const handleChangeCheckbox = (event) => {
         const { name, checked } = event.target;
         if(error) setError(false);
         setCheckedItems({...checkedItems, [name] : checked });
     }

     const handleSubmit = (event) => {
        event.preventDefault();

        !_.isEmpty(checkedItems) ? dispatch(callQuoteSaga(createStringFromObject(checkedItems))) : setError(true);

     }

    return (
        <div>
            { exchangeData.length > 0 &&
                <ExchangeComponent
                    exchangeData={exchangeData}
                    handleChangeCheckbox={handleChangeCheckbox}
                    checkedItems={checkedItems}
                    handleSubmit={handleSubmit}
                 />
            }

            { error &&
                <div className={'error'}><p>* Exchange must be selected!</p></div>
            }
        </div>
    )

}

export default Exchange;


