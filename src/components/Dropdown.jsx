import { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ options, multiple = false }) => {
  const [selectedOptions, setSelectedOptions] = useState(multiple ? [] : '');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    if (multiple) {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter((item) => item !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    } else {
      setSelectedOptions(option);
      setIsOpen(false); // close dropdown for radio selection
    }
  };

  const isSelected = (option) => {
    return multiple
      ? selectedOptions.includes(option)
      : selectedOptions === option;
  };

  return (
    <div className='dropdown'>
      <button className='dropdown-button' onClick={toggleDropdown}>
        {multiple
          ? selectedOptions.length > 0
            ? selectedOptions.join(', ')
            : 'Select options'
          : selectedOptions || 'Select an option'}
      </button>
      {isOpen && (
        <div className='dropdown-content'>
          {options.map((option) => (
            <label
              key={option}
              className={`dropdown-item ${
                isSelected(option) ? 'selected' : ''
              }`}
              onClick={() => handleOptionClick(option)}
            >
              <input
                type={multiple ? 'checkbox' : 'radio'}
                name='options'
                value={option}
                checked={isSelected(option)}
                onChange={() => handleOptionClick(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
