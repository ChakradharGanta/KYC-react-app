//libs
import { Box, Button } from 'app/components';
import c from 'classnames';

interface TypeListProps {
  list: string[];
  className?: string;
}

const TypeList = (props: TypeListProps) => {
  const { list, className = '' } = props;
  return (
    <Box className={c('flex my-12 space-x-12 overflow-x-auto', className)}>
      {list.map((item) => (
        <Button key={item} variant="outlined" className="flex-shrink-0">
          {item}
        </Button>
      ))}
    </Box>
  );
};

export default TypeList;
