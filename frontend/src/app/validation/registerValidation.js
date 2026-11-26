export const regValidation = (name, value, size, type) => {
  let errorMsg ='';
  switch(name){
    case 'Uid':
      if(!value){
          errorMsg = 'User ID is required';
      }else{
        const regExp= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!regExp.test(value)){
          errorMsg = 'User ID must be a valid email address';
        }
      }
      break;

    case 'Pwd':
      if(!value){
          errorMsg = 'Password is required';
      }
      if(value && value.length < 5){
          errorMsg = 'Password must be at least 5 characters long';
      }
      break;
    
    case 'Gender':
    case 'Country':
    case 'Address':   
      if(!value){
          errorMsg = `${name} is required`;
      }
      break;

    case 'Hobbies':
      if(!value || value.length === 0){
          errorMsg = 'Hobbies is required';
    }
      break;

    case 'Photo':
      if(!value){
          errorMsg = 'Photo is required';
      }else if(type !== 'image/jpeg' && type !== 'image/png'){
          errorMsg = 'File type should be JPEG, PNG';
      }else if(size > 2500000){
          errorMsg = 'Size of the file should be less than 2.5 MB';
      } 
      break;
      
      
  }

  return errorMsg;
}
