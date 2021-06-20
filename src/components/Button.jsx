import React from "react";
import "./button.css";

const STYLES = ["numberpad", "symbles", "controls"];

export const Button = ({ children, type, onClick, buttonStyle, id, value }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];
    return (
        <button
            className={`btn ${checkButtonStyle}`}
            onClick={onClick}
            type={type}
            id={id}
            value={value}
        >
            {children}
        </button>
    );
};
