
import React from 'react';

export const Input = (props) => {

    const { label, type, name, options , fnChange , value, errorMsg = '', preview } = props;

    const fnPrepareInput = () => {

        switch (type) {

            case 'text':
            case 'password':
                return (
                    <input value={value} onChange={fnChange} type={type} name={name} className='form-control'/>
                );
            
            case 'file':
                return (
                    <>
                        <input
                            onChange={fnChange}
                            type="file"
                            name={name}
                            accept="image/jpeg,image/png"
                            className="form-control"
                        />

                        {preview && (
                            <div className="mt-2">
                                <img
                                    src={preview}
                                    alt="Selected Photo"
                                    width="120"
                                    height="120"
                                    style={ {objectFit: 'cover' } }
                                />
                            </div>
                        )}
                    </>
                );
            
            case 'radio':
                return (
                    <div className='d-flex gap-3'>
                        {options.map((option, index) => (
                            <div key={index} className='form-check'>
                                <input value={option.value} onChange={fnChange} className='form-check-input' type={type} name={name} id={`${name}-${index}`} checked={value === option.value}/>
                                <label  className='form-check-label' htmlFor={`${name}-${index}`} > {option.label} </label>
                            </div>
                        ))}
                    </div>
                );

            case 'checkbox':
                return (
                    <div className='d-flex gap-3'>
                        {options.map((option, index) => (
                            <div key={index} className='form-check'>
                                <input value={option} onChange={fnChange} className='form-check-input' type={type} name={name} id={`${name}-${index}`} checked={value.includes(option)} />
                                <label className='form-check-label' htmlFor={`${name}-${index}`} > {option} </label>
                            </div>
                        ))}
                    </div>
                );


            default:
                return null;
        }
    };

    return (
        
        <div className='row mb-3'>

            <div className='col-sm-5 text-end'>
                <p>{label}:</p>
            </div>

            <div className='col-sm-4'>
                {fnPrepareInput()}
            </div>

            <div className='col-sm-3'>
                {errorMsg && <b className='text-danger'>{errorMsg}</b>}
            </div>

        </div>
    );
};
