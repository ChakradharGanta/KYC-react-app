//libs
import { useCallback, useState } from 'react';
import { Box, Button, Typography } from 'app/components';
import c from 'classnames';
import { buttonStyle } from './styles';

interface TypeListProps {
  list: string[];
  className?: string;
  name: string;
  onTypeChange?: (x: string) => void;
}

const TypeList = (props: TypeListProps) => {
  const { list, className = '', name, onTypeChange } = props;
  const [gender, setGender] = useState('');
  const _onClick = useCallback(
    (item: string) => {
      sessionStorage.setItem(name, item);
      setGender(item);
      onTypeChange?.(item);
    },
    [name, onTypeChange]
  );

  return (
    <Box className={c('flex my-12 space-x-12 overflow-x-auto', className)}>
      {list.map((item) => (
        <Button
          key={item}
          onClick={(_event) => _onClick(item)}
          variant="outlined"
          className={c('flex-shrink-0', gender === item ? buttonStyle : '')}>
          <Typography variant="body-short-01">{item}</Typography>
        </Button>
      ))}
    </Box>
  );
};

export default TypeList;
