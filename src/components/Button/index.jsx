import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Button.propTypes = {
    variant: PropTypes.string,
    startIcon: PropTypes.string,
    endIcon: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    disableShadow: PropTypes.func,
    disabled: PropTypes.func
};

Button.defaultProps = {
    variant: '',
    startIcon: '',
    endIcon: '',
    size: '',
    color: '',
    disableShadow: null,
    disabled: null
};

const STYLES = [
    'default',
    'primary',
    'secondary',
    'danger'
];

const SIZES = [
    'sm',
    'md',
    'lg'
]

const VARIANT = [
    'outline',
    'text'
]

function Button(props) {
    const { variant, startIcon, endIcon, size, color, disableShadow, disabled } = props;

    const buttonVariant = VARIANT.includes(variant) ? ('btn--' + variant) : '';
    const buttonStartIcon = startIcon !== '' ? ('btn--startIcon') : '';
    const buttonEndIcon = endIcon !== '' ? ('btn--endIcon') : '';
    const buttonSize = SIZES.includes(size) ? ('btn--' + size) : 'btn--md';
    const buttonColor = STYLES.includes(color) ? ('btn--' + color) : 'btn--default';
    const buttonDisabledShadow = disableShadow != null ? ('btn--disableShadow') : '';
    const buttonDisabled = disabled !== null ? true : false;

    return (
        <button
            type="button"
            className={`btn ${buttonColor} ${buttonSize} ${buttonVariant} ${buttonDisabledShadow} ${buttonStartIcon} ${buttonEndIcon}`}
            disabled={buttonDisabled}>
            {
                buttonStartIcon !== '' && <span span className="material-icons">add_shopping_cart</span>
            }
            Default
            {
                buttonEndIcon !== '' && <span span className="material-icons">add_shopping_cart</span>
            }
        </button >
    );
}

export default Button;