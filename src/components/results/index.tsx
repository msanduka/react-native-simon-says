import Results from './results';
import ScoreNameModal from './score_modal';
import {
  gameStyle,
  scoreAlertStyle,
  resultListStyle,
  MIN_ALERT_BUTTON_WIDTH,
} from '../styles';
import {ResultScreenProps} from '../../navigation/types';
import {ScoreNameModalProps, RootState, IResultData} from '../../types';

export type {ScoreNameModalProps, ResultScreenProps, RootState, IResultData};
export {
  ScoreNameModal,
  scoreAlertStyle,
  resultListStyle,
  gameStyle,
  MIN_ALERT_BUTTON_WIDTH,
};
export default Results;
