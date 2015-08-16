var audioContext = new AudioContext()

play(0, 3, 0.5)
play(1, 10, 0.5)
play(2, 15, 0.5)

function play(delay, pitch, duration) {
  var startTime = audioContext.currentTime + delay
  var endTime = startTime + duration
    
  var oscillator = audioContext.createOscillator()
  
  var amp = audioContext.createGain()
  oscillator.connect(amp)
  amp.connect(audioContext.destination)
  
  amp.gain.value = 0
  amp.gain.setTargetAtTime(1, startTime, 0.1);
  amp.gain.setTargetAtTime(0, endTime, 0.2);

  oscillator.type = 'sawtooth'
  oscillator.detune.value = pitch * 100 

  oscillator.start(startTime)
  oscillator.stop(endTime + 2)
}