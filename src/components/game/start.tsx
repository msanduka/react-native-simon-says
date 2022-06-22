import React from 'react';
import {useDispatch} from 'react-redux';
import {Box, Button} from 'native-base';
import {startStyle, MIDDLE_CIRCLE_SIZE} from '.';
import {startGame} from '../../reducers/game';
import {Localization} from '../../localization';
const GameStart = () => {
  const dispatch = useDispatch();

  const onStart = () => {
    dispatch(startGame());
  };
  return (
    <Box
      style={startStyle.view}
      position={'absolute'}
      alignItems={'center'}
      alignSelf={'center'}
      justifyContent={'center'}>
      <Button
        borderWidth={10}
        onPress={onStart}
        _text={startStyle.button_text}
        width={MIDDLE_CIRCLE_SIZE}
        height={MIDDLE_CIRCLE_SIZE}
        borderRadius={MIDDLE_CIRCLE_SIZE / 2}
        overflow={'hidden'}>
        {Localization('play_button')}
      </Button>
    </Box>
  );
};

export default GameStart;
