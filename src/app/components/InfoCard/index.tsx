//libs
import c from 'classnames';
import Avatar from '@material-ui/core/Avatar';
//components
import { Box } from 'app/components';
//types
import { InfoCardProps } from './types';
//styles
import { cardStyles } from './styles';

const InfoCard = (props: InfoCardProps) => {
  const { imgSrc, mainInfo, subInfo } = props;

  return (
    <Box className={c('flex text-2xl m-8 p-16 bg-gray-400 h-80', cardStyles)}>
      <Avatar src={imgSrc} />
      <Box className="flex flex-col pl-24 justify-between">
        <Box className="text-3xl">
          <strong>{mainInfo}</strong>
        </Box>
        <Box>{subInfo}</Box>
      </Box>
    </Box>
  );
};

export default InfoCard;
