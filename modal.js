// 프로젝트 정보 데이터
const projects = {
  project1: {
    title: 'Edit Design Project 1',
    image: 'img/p1.jpg',
    description: '이 프로젝트는 엑스코에서 진행한 펫페어 포스터를 위한 디자인 입니다. 동물의 귀여움을 강조하였습니다.'
  },
  project2: {
    title: 'Edit Design Project 2',
   image: 'img/p2.jpg',
    description: '리플렛 디자인 프로젝트로, 칠곡 스템프 투어를 주제로 한 작업입니다.'
  },
  project3: {
    title: 'Edit Design Project 3',
    image: 'img/p3.jpg',
    description: '디저트 카페 로고디자인 프로젝트로, 브랜드의 정체성을 명확히 표현했습니다.'
  },
  project4: {
    title: 'Edit Design Project 4',
    image: 'img/p4.jpg',
    description: '영진직업전문학교를 주제로 한 팀 프로젝트로, 학교의 여러 소식을 담았습니다.'
  },
  project5: {
    title: 'Edit Design Project 5',
    image: 'img/p5.jpg',
    description: '봄맞이 차량 정기점검을 주제로 sns 배너를 만들었습니다. 계절감을 강조하고 차량점검의 중요성을 전달하였습니다.'
  },
  project6: {
    title: 'Edit Design Project 6',
    image: 'img/p6.jpg',
    description: '화이트랩스 치아미백 의료기기를 주제로 상세페이지를 디자인 하였습니다.'
  }
};

// 모달 열기 함수
function openModal(projectId) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const project = projects[projectId];

  modalBody.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h2>${project.title}</h2>
    <p>${project.description}</p>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// 모달 닫기 함수
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// 모달 외부 클릭시 닫기
function closeModalOnOutside(event) {
  if (event.target.id === 'modal') {
    closeModal();
  }
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});