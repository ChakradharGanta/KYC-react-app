//libs
import c from 'classnames';
import Avatar from '@material-ui/core/Avatar';
//components
import { Box, Typography } from 'app/components';
//types
import { InfoCardProps } from './types';
//styles
import { cardStyles } from './styles';

const InfoCard = (props: InfoCardProps) => {
  const { imgSrc, mainInfo, subInfo } = props;

  return (
    <Box className={c('flex m-8 p-16 bg-gray-400', cardStyles)}>
      <Avatar src={imgSrc} />
      <Box className="flex flex-col pl-24">
        <Typography variant="display-s">{mainInfo}</Typography>
        <Typography variant="body-short-02" className="mt-6">
          {subInfo}
        </Typography>
      </Box>
    </Box>
  );
};

export default InfoCard;
