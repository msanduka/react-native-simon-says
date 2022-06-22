import React from 'react';
import {useSelector} from 'react-redux';
import {Box, Center, Text} from 'native-base';
import {RootState, scoreStyle, MIDDLE_CIRCLE_SIZE} from '.';
import {Localization} from '../../localization';
const GameScore = () => {
  const {score, gameOver, playerPlayTime} = useSelector(
    (state: RootState) => state.game,
  );

  const getWhichTurn = (): string => {
    if (playerPlayTime) {
      return Localization('player_turn');
    } else {
      return Localization('simon_turn');
    }
  };

  return (
    <Box
      style={scoreStyle.view}
      position={'absolute'}
      alignItems={'center'}
      alignSelf={'center'}
      justifyContent={'center'}>
      <Center
        width={MIDDLE_CIRCLE_SIZE}
        height={MIDDLE_CIRCLE_SIZE}
        borderRadius={MIDDLE_CIRCLE_SIZE / 2}
        overflow={'hidden'}
        backgroundColor={'#000000'}
        justifyContent={'space-evenly'}>
        {!gameOver && (
          <>
            <Text
              alignSelf={'center'}
              fontSize={20}
              color={'#ffffff'}>{`${getWhichTurn()}`}</Text>
            <Text
              alignSelf={'center'}
              fontSize={16}
              color={'#ffffff'}>{`${Localization(
              'score_prefix',
            )} ${score}`}</Text>
          </>
        )}
        {gameOver && (
          <Text alignSelf={'center'} fontSize={24} color={'#ffffff'}>
            {Localization('gameOver')}
          </Text>
        )}
      </Center>
    </Box>
  );
};

export default GameScore;
