// 프로젝트 정보 데이터
const projects = {
  project1: {
    title: 'Edit Design Project 1',
    image: 'img/p1.jpg',
    description: '반려동물과 보호자가 함께 즐기는 축제의 즐거움을 귀여운 캐릭터 일러스트와 파스텔 톤 컬러로 표현한 펫페어 홍보 포스터 디자인'
  },
  project2: {
    title: 'Edit Design Project 2',
   image: 'img/p2.jpg',
    description: '칠곡 지역 관광 활성화를 위해 자연 친화적인 일러스트와 체험형 요소를 활용하여 제작한 스탬프투어 홍보 리플렛 디자인'
  },
  project3: {
    title: 'Edit Design Project 3',
    image: 'img/p3.jpg',
    description: '수제 디저트의 따뜻함과 친근한 이미지를 손그림 스타일 캐릭터와 브라운 컬러로 표현한 디저트 카페 로고 디자인'
  },
  project4: {
    title: 'Edit Design Project 4',
    image: 'img/p4.jpg',
    description: '학교의 성과와 교육 프로그램 정보를 체계적으로 전달하고, 학생 및 관계자들에게 브랜드 로열티 형성하는 팀 프로젝트 디자인'
  },
  project5: {
    title: 'Edit Design Project 5',
    image: 'img/p5.jpg',
    description: '봄철 나들이 시즌을 앞두고 차량 점검의 필요성을 환기하며 서비스 예약을 유도하는 SNS배너 디자인'
  },
  project6: {
    title: 'Edit Design Project 6',
    image: 'img/p6.jpg',
    description: '화이트랩스 치아미백 의료기기 인증 신뢰성을 강조하고, 복잡한 사용법을 직관적으로 전달하여 실질적인 구매를 유도하는 상세페이지 디자인'
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