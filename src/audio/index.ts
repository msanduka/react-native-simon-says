import Sound from 'react-native-sound';

export default (fileName: string) => {
  //loading the audio file
  let sound = new Sound(fileName, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('failed to load the sound', error);
      sound.release();
      return;
    } else {
      // loading successfully, now we are going to play it
      sound.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
        // release it for another plays
        sound.release();
      });
    }
  });
};
