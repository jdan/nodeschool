var audioContext = new AudioContext()

var panNode = audioContext.createStereoPanner()
panNode.connect(audioContext.destination)

var lfo = audioContext.createOscillator()
lfo.type = 'sine'
lfo.frequency.value = 2
lfo.start(audioContext.currentTime)
lfo.connect(panNode.pan)

// ^^^^^^^^^^^^^^^^^

play(0, -7, 2.25)
play(0, 5, 2.25)
play(0, 0, 2.25)

function play(delay, pitch, duration) {
  var time = audioContext.currentTime + delay

  var oscillator = audioContext.createOscillator()
  oscillator.connect(panNode) // change output

  oscillator.type = 'triangle'
  oscillator.detune.value = pitch * 100 

  oscillator.start(time)
  oscillator.stop(time + duration)
}