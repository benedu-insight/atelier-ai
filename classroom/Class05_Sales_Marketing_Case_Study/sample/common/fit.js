/* 1280px 기준 페이지를 화면 폭에 맞게 줄인다. 페이지 높이는 body의 --ph(기본 720px). */
(function(){
  function fit(){
    var w=document.documentElement.clientWidth-32;
    var s=Math.min(1,w/1280);
    document.documentElement.style.setProperty('--s',s.toFixed(4));
  }
  addEventListener('resize',fit);fit();
})();
