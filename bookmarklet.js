//javascript:(function() {function se(d) {    return d.selection ? d.selection.createRange().text : d.getSelection()} s = se(document); for (i=0; i<frames.length && !s; i++) s = se(frames[i].document); 
//if (!s || s==%27%27) s = prompt(%27Enter search terms for Wiktionary%27,%27%27); open(%27https://en.wiktionary.org%27 + (s ? %27/w/index.php?title=Special:Search&search=%27 + encodeURIComponent(s) : %27%27)).focus(); })();
//javascript:(function() {function coursevania() {window.location.assign(document.getElementsByClassName("no-price")[0]["href"]););