import { Controls, Player } from '@lottiefiles/react-lottie-player';

export default function LottiePlayer({ src }: { src: FeatureCover }) {
  return (
    <Player autoplay loop src={src} style={{ height: '100%', width: '100%' }}>
      <Controls
        visible={false}
        buttons={['play', 'repeat', 'frame', 'debug']}
      />
    </Player>
  );
}
