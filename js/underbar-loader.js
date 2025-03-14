document.addEventListener('DOMContentLoaded', function() {
    fetch('html/underbar.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Underbar 파일 로드 실패');
        }
        return response.text();
      })
      .then(html => {
        document.getElementById('underbar-placeholder').innerHTML = html;
      })
      .catch(error => console.error('에러 발생:', error));
  });
  