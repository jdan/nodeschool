var audioContext = new AudioContext()

var oscillator = audioContext.createOscillator()
oscillator.connect(audioContext.destination)

// Switch to sawtooth
oscillator.type = 'sawtooth'

// Switch to 440hz
oscillator.frequency.value = 440

// Switch to middle C
oscillator.detune.value = 300;

oscillator.start(audioContext.currentTime)
oscillator.stop(audioContext.currentTime + 2)
