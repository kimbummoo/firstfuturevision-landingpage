document.addEventListener('DOMContentLoaded', function() {
  fetch('html/nav.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('네비게이션 파일 로드 실패');
      }
      return response.text();
    })
    .then(html => {
      document.getElementById('nav-placeholder').innerHTML = html;
      initializeNav();
    })
    .catch(error => console.error('에러 발생:', error));
});

function initializeNav() {
  // FUTURE VISION 버튼 클릭 시 xr-solution-placeholder 로 스크롤
  const btnFutVis = document.getElementById('btnFutVis');
  if (btnFutVis) {
    btnFutVis.addEventListener('click', function() {
      const target = document.getElementById('nav-placeholder');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error('대상 요소 (xr-solution-placeholder)를 찾을 수 없습니다.');
      }
    });
  }

  // XR-SOLUTION 버튼 클릭 시 future-vision-placeholder 로 스크롤
  const btnXrSolution = document.getElementById('btnXrSolution');
  if (btnXrSolution) {
    btnXrSolution.addEventListener('click', function() {
      const target = document.getElementById('future-vision-placeholder');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error('대상 요소 (future-vision-placeholder)를 찾을 수 없습니다.');
      }
    });
  }

  // WORK 버튼 클릭 시 future-vision-placeholder 로 스크롤
  const btnWork = document.getElementById('btnWork');
  if (btnWork) {
    btnWork.addEventListener('click', function() {
      const target = document.getElementById('future-vision-placeholder');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error('대상 요소 (future-vision-placeholder)를 찾을 수 없습니다.');
      }
    });
  }

  // Get Portfolio 버튼 클릭 시 PDF 파일 다운로드
  const btnGetPortfolio = document.getElementById('btnGetPortfolio');
  if (btnGetPortfolio) {
    btnGetPortfolio.addEventListener('click', function() {
      window.location.href = '/data/FUTURE_VISION_PROFILE.pdf';
    });
  }

  // Contact Us 버튼 클릭 시 contact-placeholder 로 스크롤
  const btnContactUs = document.getElementById('btnContactUs');
  if (btnContactUs) {
    btnContactUs.addEventListener('click', function() {
      const target = document.getElementById('contact-placeholder');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error('대상 요소 (contact-placeholder)를 찾을 수 없습니다.');
      }
    });
  }
}
