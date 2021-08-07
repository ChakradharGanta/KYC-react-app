import { useState } from 'react';

const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);
  const toggle = () => {
    setValue((prevValue) => !prevValue);
  };

  return { value, toggle, setValue };
};

export default useToggle;
