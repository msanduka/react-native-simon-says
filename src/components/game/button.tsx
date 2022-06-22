import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {GameButtonProps, buttonStyle, RootState} from '.';
import playSound from '../../audio';

import {addColorToPlayerSequence} from '../../reducers/game';

const GameButton: React.FC<GameButtonProps> = ({
  color,
  opacityColor,
  sound,
}) => {
  const dispatch = useDispatch();
  const {gameStarted, colorToPlay, playerPlayTime} = useSelector(
    (state: RootState) => state.game,
  );

  const onButtonPress = () => {
    playSound(sound);
    dispatch(addColorToPlayerSequence(color));
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[
        buttonStyle.view,
        {backgroundColor: colorToPlay === color ? opacityColor : color},
      ]}
      onPress={onButtonPress}
      disabled={!gameStarted || !playerPlayTime}
    />
  );
};

export default GameButton;
