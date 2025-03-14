// future-vision-loader.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('html/futurevision.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Future vision 파일 로드 실패');
        }
        return response.text();
      })
      .then(html => {
        document.getElementById('future-vision-placeholder').innerHTML = html;
      })
      .catch(error => console.error('Future vision 로드 에러:', error));
  });
  