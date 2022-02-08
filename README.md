<div id="top"></div>

<div align='center'>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=blue"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
</div>

<br />

<div align="center">
  <h3 align="center">2주차 과제 - 에이팀벤처스</h3>
  <p align="center">
    필터링 기능이 있는 대시보드를 구현한 과제입니다.
    <br />
    <br />
    <a href="https://wanted-ateamventures.herokuapp.com/"><strong>배포 링크</strong></a>
  </p>
</div>

<br>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#팀원-소개">팀원 소개</a></li>
    <li><a href="#과제-소개">과제 소개</a></li>
    <li><a href="#구현한-기능">구현한 기능</a></li>
    <li>
      <a href="#설치-및-실행">설치 및 실행
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#프로젝트-구조">프로젝트 구조</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<br>

## 팀원 소개

<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/gml9812"><img src="https://avatars.githubusercontent.com/u/28294925?v=4" width="150px" /></a></td>
    <td align="center"><a href="https://github.com/seoysauce"><img src="https://avatars.githubusercontent.com/u/65898861?v=4" width="150px" /></a></td>
    <td align="center"><a href="https://github.com/Yummy-sk"><img src="https://avatars.githubusercontent.com/u/60822846?v=4" width="150px" /></a></td>
    <td align="center"><a href="https://github.com/jambottle"><img src="https://avatars.githubusercontent.com/u/72926450?v=4" width="150px" /></a></td>
  </tr>
  <tr>
    <td align="center"><b>👑 윤희준 (팀장)</b></td>
    <td align="center"><b>정서영</b></td>
    <td align="center"><b>염상권</b></td>
    <td align="center"><b>김재원</b></td>
  </tr>
  <tr>
    <td align="center"><b>GNB 및 레이아웃</b></td>
    <td align="center"><b>드롭다운 버튼</b></td>
    <td align="center"><b>슬라이더 버튼</b></td>
    <td align="center"><b>견적 요청 카드</b></td>
  </tr>
</table>

<br>
<hr>
<br>

## 과제 소개

- 필터링 기능
<img src="https://user-images.githubusercontent.com/65898861/153092452-a83d4ab5-0dfb-4f76-add2-9313dde34202.gif" width="50%" />


- mobile 버전
<img src="https://user-images.githubusercontent.com/65898861/153092037-3063aa4e-203c-478f-a59b-62d7c2bd3565.gif" width="25%" />


<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## 구현한 기능
- [x] GNB
  - [x] 'CAPA 파트너스' 로고, 가공 업체, 로그아웃 버튼 구현
  - [x] mobile 화면에서 메뉴 버튼 클릭 시 슬라이드 메뉴 생성
- [x] 버튼
  - [x] 드롭다운 버튼 클릭 시 서브메뉴 표시
  - [x] 서브메뉴 선택 시 '필터링 리셋' 버튼 생성
  - [x] '필터링 리셋' 버튼 클릭 시 선택된 서브메뉴 요소 초기화
  - [x] 슬라이더 버튼 구현
- [x] 견적 요청 카드
  - [x] 서브메뉴 선택 혹은 필터링 리셋 버튼 클릭 시 조건에 맞는 카드만 표시
  - [x] 조건에 맞는 카드가 없을 경우 빈 화면 표시
- [x] GNB, 버튼, 견적 요청 카드에 반응형 레이아웃 구현

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## 설치 및 실행

배포 링크가 동작하지 않을 시, local에서 프로젝트를 실행하는 방법을 작성할 영역입니다.

### Prerequisites

1. NPM을 설치한다

  ```sh
  npm install npm@latest -g
  
  ```
2. json-server를 설치한다

  ```sh
  npm i -g json-server
  
  ```

### Installation

1. Repository를 clone한다.

```sh
git clone https://github.com/gml9812/wanted-frontend-pre-on-boarding-mission.git
```

2. NPM Package들을 설치한다.

```sh
npm install
```

3. 빌드 파일을 만든다.

```sh
npm run build
```

3. Localhost 환경에서 프로젝트를 실행한다.

```sh
npm start
# 이후 http://localhost:3000에서 결과물 확인
```

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## 프로젝트 구조

```bash
.
├── @types
├── public
│   └── index.html
├── server
│   ├── db.json
│   └── index.js
└── src
    ├── assets // font, images
    ├── commons // constants
    ├── components // Atomic Design에 따른 컴포넌트
    ├── pages
    ├── styles //  global styles
    ├── types
    └── index.tsx
```

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## License

라이센스를 표시할 영역입니다.

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
