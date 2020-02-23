import React from 'react';
import PropTypes from "prop-types";

import "./style.scss";

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
   return (
        <div>
             <input type={type} name={name} checked={checked} onChange={onChange} />
        </div>
   );
};

Checkbox.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Checkbox;