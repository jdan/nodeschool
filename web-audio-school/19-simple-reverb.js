var audioContext = new AudioContext()
var startTime = audioContext.currentTime + 0.2

getSample('guitar.ogg', function play(buffer) {
  // Add reverb logic here
  getSample("spring.mp3", function(impulse) {
    var convolver = audioContext.createConvolver()
    convolver.buffer = impulse
    convolver.connect(audioContext.destination)
      
    var player = audioContext.createBufferSource()
    player.buffer = buffer
    player.connect(convolver)
    player.start(startTime)
  })
})

function getSample(url, cb) {
  var request = new XMLHttpRequest()
  request.open('GET', url)
  request.responseType = 'arraybuffer'
  request.onload = function() {
    audioContext.decodeAudioData(request.response, cb)
  }
  request.send()
}
