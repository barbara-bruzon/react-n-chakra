import { useState } from 'react';
import { BsCheck2Square } from 'react-icons/bs';
import { BiSquare } from 'react-icons/bi';
import { Button } from '@chakra-ui/react';

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Button
    onClick={toggleCheck}
    size={'md'}>
        {isChecked ? <BsCheck2Square size={35} /> : <BiSquare size={35} />}
    </Button>
  );
}