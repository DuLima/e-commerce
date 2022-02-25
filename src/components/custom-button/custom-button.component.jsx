// Import React Components
import React from "react";

// Import SCSS
import './custom-button.styles.scss'

const CustomButton = ({ children, ...otherProps }) => (
    <button className="custom-button" {...otherProps}>
        {children}
    </button>
)

export default CustomButton;