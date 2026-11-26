
import React from 'react';

export const Textarea = (props) => {

    const { label, name , fnChange, errorMsg } = props;

    return (
        <div className='row mb-3'>

            <div className='col-sm-5 text-end'>
                <p>{label}:</p>
            </div>

            <div className='col-sm-4'>
                <textarea  onChange={fnChange} name={name} className='form-control' rows='3' />
            </div>

            <div className='col-sm-3'>
                {errorMsg && <b className='text-danger'>{errorMsg}</b>}
            </div>

        </div>
    );
};