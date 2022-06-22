import React, {useState, useMemo, useEffect} from 'react';
import {SafeAreaView, FlatList, ListRenderItem} from 'react-native';
import {useSelector} from 'react-redux';
import {Center, Text, Box} from 'native-base';
import {
  ScoreNameModal,
  RootState,
  ResultScreenProps,
  IResultData,
  resultListStyle,
  gameStyle,
} from '.';
import {Localization} from '../../localization';

import {useTheme} from 'native-base';

const Results = ({route, navigation}: ResultScreenProps) => {
  const score = route?.params?.score;
  const {colors} = useTheme();
  const {results} = useSelector((state: RootState) => state.results);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (results.length < 10) {
      // empty result array, then show the add score modal to add the first score
      setShowAlert(true);
    } else if (
      // since the results array is sorted based on score, the last element will be the lowest score
      // comparing that score with the current score to determine if score should be added or not
      results.length === 10 &&
      score > results[results.length - 1].score
    ) {
      // add the score becuase its one of the 10 high score
      setShowAlert(true);
    }
  }, []);

  const itemSeparator = (): React.ReactElement => {
    return <Box height={10} width={'100%'} />;
  };

  const emptyListComp = (): React.ReactElement => {
    return (
      <Center>
        <Text
          fontSize={30}
          numberOfLines={5}
          textAlign="center"
          color={colors.primary['500']}>
          {Localization('empty_results_list')}
        </Text>
      </Center>
    );
  };

  const renderItem: ListRenderItem<IResultData> = ({item}) => {
    return (
      <Box
        flex={1}
        flexDir={'row'}
        borderWidth={1}
        borderRadius={5}
        mx={1}
        my={1}
        borderColor={colors.primary['500']}>
        <Box
          flex={3}
          justifyContent={'center'}
          alignItems={'flex-start'}
          my={2}
          mx={2}>
          <Text
            fontSize={24}
            numberOfLines={2}
            textAlign="center"
            color={colors.primary['500']}>
            {item.name}
          </Text>
        </Box>
        <Box
          flex={1}
          justifyContent={'center'}
          alignItems={'flex-end'}
          my={2}
          mx={2}>
          <Text
            fontSize={18}
            numberOfLines={2}
            textAlign="center"
            color={colors.primary['500']}>
            {item.score}
          </Text>
        </Box>
      </Box>
    );
  };
  const memorizedItem: ListRenderItem<IResultData> = useMemo(
    () => renderItem,
    [results],
  );

  return (
    <SafeAreaView style={gameStyle.container}>
      <FlatList
        contentContainerStyle={resultListStyle.container}
        style={resultListStyle.margins}
        data={results}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={itemSeparator}
        windowSize={11}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        removeClippedSubviews={false}
        renderItem={memorizedItem}
        keyExtractor={(item: IResultData, index: number) => {
          return `${index}`;
        }}
        ListEmptyComponent={emptyListComp}
      />
      <ScoreNameModal showModal={showAlert} score={score} />
    </SafeAreaView>
  );
};

export default Results;
