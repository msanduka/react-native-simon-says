//react
import React, {useEffect, useState} from 'react';

//Native componentes
import {TouchableWithoutFeedback, Modal} from 'react-native';

import {Text, Box, Center} from 'native-base';

//styles
import {AlertType, alertStyle} from '.';

//Navigation
import {useTheme} from 'native-base';

//Icons

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

//Localization
//import {Localization} from '../../localization';

const AlertModal: React.FC<AlertType> = ({
  color,
  title,
  text,
  iconName,
  titleStyle,
  textStyle,
  children,
  visible,
  dismissible,
  hasInput,
  onModalDissmiss,
}) => {
  const {colors} = useTheme();

  const [modalVisible, setModalVisible] = useState(visible);
  const dismissModal = () => {
    setModalVisible(false);
    onModalDissmiss();
  };
  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);

  return (
    <Modal
      visible={modalVisible}
      animationType="fade"
      transparent={true}
      onRequestClose={dismissModal}
      style={{backgroundColor: 'transparent'}}>
      <TouchableWithoutFeedback
        onPress={() => {
          if (dismissible) {
            dismissModal();
          }
        }}>
        <Box style={alertStyle.container}>
          <TouchableWithoutFeedback>
            <Box
              style={[
                alertStyle.view_without_buttons,
                {backgroundColor: colors.primary[200]},
              ]}>
              <Box
                style={[alertStyle.header_icon_view, {backgroundColor: color}]}>
                <MaterialIcon
                  name={iconName}
                  size={30}
                  color={colors.primary[50]}
                />
              </Box>
              <Center style={alertStyle.title_view}>
                <Text
                  mt={3}
                  numberOfLines={1}
                  style={[alertStyle.text, titleStyle]}>
                  {title}
                </Text>
              </Center>
              <Center style={alertStyle.text_view}>
                <Text style={[alertStyle.text, textStyle]}>{text}</Text>
              </Center>
              {hasInput && <Box my={2}>{children[0]}</Box>}
              <Box
                style={
                  (hasInput && children?.length > 3) ||
                  (!hasInput && children?.length > 2)
                    ? alertStyle.button_view_column
                    : alertStyle.button_view_row
                }>
                {hasInput ? children.slice(1) : children}
              </Box>
            </Box>
          </TouchableWithoutFeedback>
        </Box>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AlertModal;
