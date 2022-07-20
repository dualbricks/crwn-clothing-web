import './button.styles.scss'
const BUTTON_TYPES_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',

}
const Button = ({children, buttonType, ...otherStuffs}) => {
    return(
        <button className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`} {...otherStuffs}>{children}</button>
    )
}

export default Button