var audioContext = new AudioContext()

// add effects here
var input = audioContext.createGain()
var output = audioContext.createGain()
input.connect(output)

var leftDelay = audioContext.createDelay()
var rightDelay = audioContext.createDelay()

leftDelay.delayTime.value = 3/8
rightDelay.delayTime.value = 3/8

leftDelay.connect(rightDelay)

var feedback = audioContext.createGain()
feedback.connect(leftDelay)
rightDelay.connect(feedback)
feedback.gain.value = 0.4

input.connect(feedback)

var merger = audioContext.createChannelMerger(2)
leftDelay.connect(merger, 0, 0)
rightDelay.connect(merger, 0, 1)
merger.connect(output)

// ^^^^^^^^^^^^^^^^^

play(1/8, 3, 0.05)
play(2/8, 7, 0.05)
play(3/8, 15, 0.05)

function play(startAfter, pitch, duration) {
  var time = audioContext.currentTime + startAfter

  var oscillator = audioContext.createOscillator()
  oscillator.connect(input)
  output.connect(audioContext.destination)

  oscillator.type = 'square'
  oscillator.detune.value = pitch * 100 


  oscillator.start(time)
  oscillator.stop(time + duration)
}