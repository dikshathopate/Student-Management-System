
'use client';

import React, { useState } from 'react';

import { Input } from './components/Input';
import { Select } from './components/Select';
import { Textarea } from './components/Textarea';

import { inputControls } from './includes/inputControls';
import { regValidation } from './validation/registerValidation';

export const Register = () => {
    const [data, setData] = useState(inputControls);
    const [preview, setPreview] = useState('');

    const clickRegister = () => {
        let isValid = true;
        let dataObj = {};

        const _data = data.map((input) => ({ ...input }));

        _data.forEach((inputObj) => {

            dataObj[inputObj.name] = inputObj.value;

            const errorMsg = regValidation(inputObj.name, inputObj.value, inputObj.value?.size, inputObj.value?.type);

            inputObj.errorMsg = errorMsg || '';

            if (errorMsg) isValid = false;

        });

        setData(_data);

        if (!isValid) return;

        console.log(dataObj);

        alert("sending request to the alert..");
    };


    
    const fnChange = (event) => {

        const { name, value, type, checked, files } = event.target;

        const _data = data.map((input) => ({ ...input }));

        const inputObj = _data.find((obj) => {
            return obj.name === name;
        });

        let errorMsg = '';

        switch (type) {

            case 'file':

                const selectedFile = files[0];

                if (selectedFile) {
                    console.log(selectedFile.type);
                    console.log(selectedFile.size);
                    errorMsg = regValidation(
                        name,
                        selectedFile,
                        selectedFile.size,
                        selectedFile.type
                    );

                    if (!errorMsg) {
                        inputObj.value = selectedFile;
                        const reader = new FileReader();
                        reader.onload = () => {
                            setPreview(reader.result);
                        };
                        reader.readAsDataURL(selectedFile);
                    }
                }
                break;

            case 'checkbox':

                let checkedValues = inputObj.value || [];

                if (checked) {
                    checkedValues = [...checkedValues, value];
                } else {
                    checkedValues = checkedValues.filter(
                        (item) => item !== value
                    );
                }

                inputObj.value = checkedValues;

                break;

            default:

                inputObj.value = value;

        }

        if (type !== 'file') {
            errorMsg = regValidation(name, inputObj.value);
        }

        inputObj.errorMsg = errorMsg || '';

        setData(_data);
    };



    return (
        <div className='mb-5'>

            <h3 className='text-center mt-3 mb-3'>
                Register
            </h3>

            <div className='container-fluid'>

                {
                    data.map((input, index) => {

                        switch (input.tag) {

                            case 'input':

                                return (
                                    <Input
                                        key={index}
                                        label={input.label}
                                        type={input.type}
                                        name={input.name}
                                        options={input.options}
                                        fnChange={fnChange}
                                        value={input.type === 'file' ? '' : input.value}
                                        errorMsg={input.errorMsg}
                                        preview={input.type === 'file' ? preview : ''}
                                    />
                                );

                            case 'select':

                                return (
                                    <Select
                                        key={index}
                                        label={input.label}
                                        name={input.name}
                                        options={input.options}
                                        fnChange={fnChange}
                                        value={input.value}
                                        errorMsg={input.errorMsg}
                                    />
                                );

                            case 'textarea':

                                return (
                                    <Textarea
                                        key={index}
                                        label={input.label}
                                        name={input.name}
                                        fnChange={fnChange}
                                        value={input.value}
                                        errorMsg={input.errorMsg}
                                    />
                                );

                            default:
                                return null;
                        }

                    })
                }

                <div className='row'>

                    <div className='offset-sm-5 col-sm-7'>

                        <button
                            onClick={clickRegister}
                            className='btn btn-primary'
                        >
                            Register
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};
