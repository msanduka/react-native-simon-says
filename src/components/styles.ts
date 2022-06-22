import {StyleSheet} from 'react-native';

export const MIN_ALERT_BUTTON_WIDTH = 70;
const ICON_VIEW_WIDTH = 70;
const ICON_VIEW_HEIGHT = 70;
export const MIDDLE_CIRCLE_SIZE = 150;

export const gameStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export const buttonStyle = StyleSheet.create({
  view: {
    flex: 1,
    margin: 5,
    borderRadius: 30,
  },
});

export const scoreStyle = StyleSheet.create({
  view: {top: 0, left: 0, right: 0, bottom: 0},
  button_text: {color: 'black', fontSize: 24},
});

export const startStyle = StyleSheet.create({
  view: {top: 0, left: 0, right: 0, bottom: 0},
  button_text: {color: 'black', fontSize: 24},
});

export const resultListStyle = StyleSheet.create({
  margins: {marginLeft: 20, marginRight: 20},
  container: {paddingTop: 20, paddingBottom: 20},
});
// Modal componentes styles
export const alertStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  view_without_buttons: {
    width: 300,
    minHeight: 200,
    borderRadius: 10,
    alignItems: 'center',
  },

  header_icon_view: {
    position: 'absolute',
    top: -(ICON_VIEW_HEIGHT / 2),
    alignSelf: 'center',
    width: ICON_VIEW_WIDTH,
    height: ICON_VIEW_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: ICON_VIEW_WIDTH / 2,
  },

  title_view: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  text_view: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },

  button_view_column: {
    width: '80%',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },

  button_view_row: {
    width: '80%',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
  },

  text: {
    textAlign: 'center',
  },
});

export const scoreAlertStyle = StyleSheet.create({
  button_text: {},
});
