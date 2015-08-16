var audioContext = new AudioContext()

// add effects here
var tremolo = audioContext.createGain()
tremolo.connect(audioContext.destination)
tremolo.gain.value = 0

var lfo = audioContext.createOscillator()
lfo.type = 'sine'
lfo.frequency.value = 3
lfo.start(audioContext.currentTime)

var shaper = audioContext.createWaveShaper()
shaper.connect(tremolo.gain)
shaper.curve = new Float32Array([0, 1])
lfo.connect(shaper)

// ^^^^^^^^^^^^^^^^^

play(0, -9, 2.25)
play(0, 3, 2.25)
play(0, 0, 2.25)

function play(delay, pitch, duration) {
  var time = audioContext.currentTime + delay

  var oscillator = audioContext.createOscillator()
  oscillator.connect(tremolo) // change output

  oscillator.type = 'triangle'
  oscillator.detune.value = pitch * 100 

  oscillator.start(time)
  oscillator.stop(time + duration)
}