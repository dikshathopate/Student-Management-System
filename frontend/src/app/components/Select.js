
import React from 'react';

export const Select = (props) => {

    const { label, name, options, value,fnChange, errorMsg= '' } = props;

    return (
        <div className='row mb-3'>

            <div className='col-sm-5 text-end'>
                <p>{label}:</p>
            </div>

            <div className='col-sm-4'>

                <select onChange={fnChange} name={name} value={value} className='form-select'>

                    <option value=''>Please Select</option>

                    {options.map((value, index) => (
                        <option key={index} value={value}>
                            {value}
                        </option>
                    ))}

                </select>

            </div>

            <div className='col-sm-3'>
                 {errorMsg && <b className='text-danger'>{errorMsg}</b>}
            </div>

        </div>
    );
};
