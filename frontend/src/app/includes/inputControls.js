export const inputControls = [
    {
        label: 'User ID',
        tag: 'input',
        type: 'text',
        name: 'Uid',
        value: ''
    },
    {
        label: 'Password',
        tag: 'input',
        type: 'password',
        name: 'Pwd',
        value: ''
    },
    {
        label: 'Gender',
        tag: 'input',
        type: 'radio',
        name: 'Gender',
        options: [
            { label: 'Male', value: 'M' },
            { label: 'Female', value: 'F' }
        ],
        value: ''
    },
    {
        label: 'Hobbies',
        tag: 'input',
        type: 'checkbox',
        name: 'Hobbies',
        options: ['Cricket', 'Dancing', 'Sports'],
        value: []
    },

    {
        label: 'Country',
        tag: 'select',
        name: 'Country',
        options: ['India', 'USA', 'UK', 'Canada'],
        value: ''
    },

    {
        label : 'Address',
        tag : 'textarea',
        name : 'Address',
        value : ''
    },

    {
        label : 'Photo',
        tag : 'input',
        type : 'file',
        name : 'Photo',
        value : '' 
    }
];
