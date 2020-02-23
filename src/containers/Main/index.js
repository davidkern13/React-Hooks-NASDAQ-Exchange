import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';

import LayoutContent from '../../layout';
import Loading from '../../libs/Loading';

const ExchangeContainer = lazy(() => import('../Exchange'));
const QuoteContainer = lazy(() => import('../Quote'));

const MainContainer = () => {

    const store_data = useSelector(state => state);

    const [quoteStatus, setQuoteStatus] = useState({});

    useEffect( () => {
        let { quote : { data }} = store_data;
        setQuoteStatus(data.length === 0);
    }, [store_data]);

    return (
        <LayoutContent>

            <Suspense fallback={<Loading />}>
                <ExchangeContainer />
            </Suspense>

            { !quoteStatus &&
                <Suspense fallback={<Loading />}>
                    <QuoteContainer />
                </Suspense>
            }

        </LayoutContent>
    )
}
export default MainContainer;