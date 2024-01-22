export function decreaseVolumeWithDelay(
  vidPlayerRef: React.RefObject<HTMLVideoElement>
) {
  if (!vidPlayerRef.current) return;
  let currentVolume = vidPlayerRef.current.volume;
  const targetVolume = 0;
  const decrement = 0.1;
  const delay = 50;

  function decreaseVolume() {
    if (currentVolume > targetVolume) {
      currentVolume -= decrement;
      if (currentVolume < 0) {
        currentVolume = 0;
      }
      if (vidPlayerRef.current) {
        vidPlayerRef.current.volume = currentVolume > 0 ? currentVolume : 0;
      }
      setTimeout(decreaseVolume, delay);
    }
  }

  decreaseVolume();
}

export function increaseVolumeWithDelay(
  vidPlayerRef: React.RefObject<HTMLVideoElement>,
  targetVolume: number
) {
  if (!vidPlayerRef.current) return;

  let currentVolume = vidPlayerRef.current.volume;
  const increment = 0.1;
  const delay = 100;

  function increaseVolume() {
    if (currentVolume < targetVolume) {
      currentVolume += increment;
      if (vidPlayerRef.current) vidPlayerRef.current.volume = currentVolume;
      setTimeout(increaseVolume, delay);
    }
  }

  increaseVolume();
}
