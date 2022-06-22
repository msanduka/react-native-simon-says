import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Button, Input} from 'native-base';
import {AlertModal} from '../app';
import {Localization} from '../../localization';
import {useTheme} from 'native-base';
import {addResult} from '../../reducers/results';
import {ScoreNameModalProps, scoreAlertStyle, MIN_ALERT_BUTTON_WIDTH} from '.';

const ScoreNameModal: React.FC<ScoreNameModalProps> = ({showModal, score}) => {
  const {colors} = useTheme();
  const [showAlert, setShowAlert] = useState(showModal);
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const dismissModal = () => {
    setShowAlert(false);
  };

  const addScrore = () => {
    dispatch(addResult({name: name ? name : '-', score}));
    dismissModal();
  };

  useEffect(() => {
    setShowAlert(showModal);
  }, [showModal]);

  return (
    <AlertModal
      color={colors.red[500]}
      title={`${Localization('score_prefix')} ${score}`}
      text={Localization('enter_name')}
      iconName="error"
      visible={showAlert}
      hasInput={true}
      dismissible={false}
      titleStyle={{fontSize: 18}}
      textStyle={{fontSize: 18}}
      onModalDissmiss={dismissModal}>
      <Input
        mx={5}
        placeholder={Localization('enter_name_placehoder')}
        width="90%"
        onChangeText={text => {
          setName(text);
        }}
      />
      <Button
        size={'lg'}
        minWidth={MIN_ALERT_BUTTON_WIDTH}
        colorScheme={'green'}
        onPress={addScrore}
        borderRadius={10}
        mx={5}
        _text={scoreAlertStyle.button_text}>
        {Localization('yes')}
      </Button>
      <Button
        size={'lg'}
        minWidth={MIN_ALERT_BUTTON_WIDTH}
        colorScheme={'warmGray'}
        onPress={dismissModal}
        borderRadius={10}
        mx={5}
        _text={scoreAlertStyle.button_text}>
        {Localization('cancel')}
      </Button>
    </AlertModal>
  );
};

export default ScoreNameModal;
