(() => {

  enum AudioLevel {
    min = 1,
    medium = 5,
    max = 10
  }

  let currentAudio = AudioLevel.medium;
  console.log(currentAudio); // 1
  console.log(AudioLevel);

})();