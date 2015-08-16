var audioContext = new AudioContext()

play(0, 3, 0.5)
play(1, 10, 0.5)
play(2, 15, 0.5)

function play(delay, pitch, duration) {
  var startTime = audioContext.currentTime + delay
  var endTime = startTime + duration

  var oscillator = audioContext.createOscillator()
  var filter = audioContext.createBiquadFilter();
  oscillator.connect(filter);
  filter.connect(audioContext.destination);
  
  // Filter out all frequencies below 10000Hz
  filter.type = 'highpass';
  filter.frequency.value = 10000;

  oscillator.type = 'sawtooth'
  oscillator.detune.value = pitch * 100 

  oscillator.start(startTime)
  oscillator.stop(endTime)
}