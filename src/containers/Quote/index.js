import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import QuoteComponent from '../../components/Quote';

const Quote = () => {

    const quote_store_data = useSelector(state => state.quote);
    const [quoteData, setQuoteData] = useState([]);

    useEffect( () => {
        let { data = [] } = quote_store_data;
        setQuoteData(data);
    }, [quote_store_data]);

    return (
        <div className={'Quote__container'}>
          { quoteData.length > 0 &&
            <QuoteComponent
                data={quoteData}
            />
          }
        </div>
    )
}

export default Quote;