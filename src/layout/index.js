import React from 'react';
import './style.scss';

function LayoutContent(props){

    return (
        <div className={'layout_container'}>
            <div className={'component_content'}>
                <h1>Exchange List NASDAQ</h1>

                {props.children}
            </div>
        </div>
    )
}

export default LayoutContent;