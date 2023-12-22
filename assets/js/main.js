const RESULT = [
  {
    result:'율법 의원',
    href:'./strait-gate.html'
  },
  {
    result:'믿음',
    href:'./faith.html'
  },
  {
    result:'바알세불',
    href:'./narrow-way.html'
  },
  {
    result:'좁은 길',
    href:'./ending.html'
  }
]
sendAnswer = function(idx) {
  let answer = document.getElementById('answer');

  if(RESULT[idx].result === answer.value) {
    document.location.href = RESULT[idx].href;
  } else {
    alert('정답을 확인해주세요.');
  }
}

function enterkey(e, idx) {
	if (e.keyCode == 13) {
    	sendAnswer(idx);
    }
}
