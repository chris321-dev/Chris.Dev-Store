import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from "../../context/shop-context";

export const useColorSelectorFunctions = (onSubmit) => {
  const {generateCode, code } = useContext(ShopContext);
  // const [code, setCode] = useState('');
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value.slice(0, 4));
  };

  const handleSubmit = (event) => {
    onSubmit();
    event.preventDefault();
    if (inputValue === code && parseInt(code) > 1) {
      navigate('/anotherPage1');
      //window.open('/anotherPage1', '_blank')
    } else if (code === '') {
      alert('Click Generate button to get code');
    } else if (inputValue === '') {
      alert('Enter code to continue');
    } else {
      setInputValue('');
      alert('Incorrect code. Please try again.');
    }
  };

  const handleKeyPress = (event) => {
    const charCode = event.which || event.keyCode;
    if ((charCode < 48 || charCode > 57) && charCode !== 13) {
      event.preventDefault();
    }
  };

  // const generateCode = () => {
  //   const randomCode = Math.floor(1000 + Math.random() * 9000);
  //   setCode(randomCode.toString());
  // };

  return {
    handleInputChange,
    handleSubmit,
    handleKeyPress,
    //generateCode,
    inputValue,
    //code,
  };
};
