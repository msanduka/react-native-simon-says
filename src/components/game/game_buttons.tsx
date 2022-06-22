import React from 'react';
import {Box} from 'native-base';

import {GameButtonsProps, GameButton} from '.';

const GameButtons: React.FC<GameButtonsProps> = ({data}) => {
  if (data && data.length !== 4) {
    return null;
  } else {
    return (
      <Box flex={1} my={5} mx={5}>
        <Box flex={1} flexDir={'row'}>
          <GameButton
            color={data[0].color}
            opacityColor={data[0].opacityColor}
            sound={data[0].sound}
          />
          <GameButton
            color={data[1].color}
            opacityColor={data[1].opacityColor}
            sound={data[1].sound}
          />
        </Box>

        <Box flex={1} flexDir={'row'}>
          <GameButton
            color={data[2].color}
            opacityColor={data[2].opacityColor}
            sound={data[2].sound}
          />
          <GameButton
            color={data[3].color}
            opacityColor={data[3].opacityColor}
            sound={data[3].sound}
          />
        </Box>
      </Box>
    );
  }
};

export default GameButtons;
