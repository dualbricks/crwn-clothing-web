import './form-input.styles.scss'

const FormInput = ({label, ...otherStuffs}) => {
    return (
        <div className="group">
        <input className="form-input" {...otherStuffs} />
        {label && ( <label className={`${otherStuffs.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>)}
            
        </div>
    )
}

export default FormInput