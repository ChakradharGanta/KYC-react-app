//libs
import { Box, Button } from 'app/components';

interface TypeListProps {
  list: string[];
}

const TypeList = (props: TypeListProps) => {
  const { list } = props;
  return (
    <Box className="flex my-12 space-x-12 overflow-x-auto">
      {list.map((item) => (
        <Button variant="outlined" className="flex-shrink-0">
          {item}
        </Button>
      ))}
    </Box>
  );
};

export default TypeList;
