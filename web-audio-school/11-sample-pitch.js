var audioContext = new AudioContext()
var startTime = audioContext.currentTime + 0.1

getSample('vox.ogg', function play(buffer) {
  var player = audioContext.createBufferSource()
  player.buffer = buffer
  player.connect(audioContext.destination)
  player.start(startTime, 0, buffer.duration)
  
  player.playbackRate.value = 0.5
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
