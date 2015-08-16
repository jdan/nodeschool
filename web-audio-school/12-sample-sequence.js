var audioContext = new AudioContext()
var startTime = audioContext.currentTime + 0.1

getSample('vox.ogg', function(buffer) {
  play(0, -12)
  play(1, -5)
  play(2, 0)

  function play(delay, transpose) {
    var player = audioContext.createBufferSource()
    player.buffer = buffer
    player.connect(audioContext.destination)
    player.start(startTime + delay)
    
    player.playbackRate.value = Math.pow(2, transpose / 12)
  }
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
