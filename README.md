# 제네시스 프로모션 사이트

## 1. 소개 
제네시스 사이트의 프로모션 사이트를 가상으로 생각하고 제작했습니다.
   
&nbsp;
&nbsp;
****
&nbsp;
&nbsp;
   
## 2. 배포주소
[https://ejonghwan.github.io/genesis/](https://ejonghwan.github.io/genesis/)
   
&nbsp;
&nbsp;
****
&nbsp;
&nbsp;

## 3. 사용기술 
HTML5, SASS, Javascript, 카카오맵 API, EmailJS, 플리커 API, 유튜브 API

&nbsp;
&nbsp;
****
&nbsp;
&nbsp;

## 4. 폴더구조 
### 4-1. 전체
<img src="https://github.com/ejonghwan/genesis/assets/53946298/4fbe6455-3837-4dd7-862f-dc2aa850696c" width="60%" height="auto"></img>
### 4-2. SASS 
<img src="https://github.com/ejonghwan/genesis/assets/53946298/c627cfc4-5290-41be-ae01-d74ed5e1cd2e" width="60%" height="auto"></img>
### 4-3. JS
<img src="https://github.com/ejonghwan/genesis/assets/53946298/53b13c77-217d-4a29-80ae-028d66bf29fb" width="60%" height="auto"></img>

&nbsp;
&nbsp;
****
&nbsp;
&nbsp;


## 5. 기능
### 5-1. 반응형 작업
![반응형](https://github.com/ejonghwan/genesis/assets/53946298/9b7ddc73-225e-4f99-93dc-d0f54f8e8a1a)

&nbsp;
&nbsp;
&nbsp;

### 5-2. 최적화 작업
<img src="https://github.com/ejonghwan/genesis/assets/53946298/505f39ed-21e0-4faf-b587-eda2d9dbb5d0" width="40%" height="auto"></img>
#### 성능 개선을 위해 고민한 부분들
사이트 특성상 동영상, 이미지의 퀄리티를 포기할 수 없는데 그대로 쓰기에는 너무 무겁고 양도 많아서 아래 사항들을 개선했습니다.   
* 첫 로딩 시 화면에 필요한 리소스만 가져올 수 있을까 ?  (Performance 20% 가량 개선) 
  * 메인 비주얼 6개의 동영상 중 처음 재생되는 동영상만 metadata를 로드하고 제외하고 모두 preload: none 적용.
  * 다른 동영상을 로드하지 않으니 빈 박스로 보이는 이슈 발생. video poster로 해결
  * poster IMG로 변경하니 CLS 이슈 발생.  문제가 발생되는 IMG 2장과 font를 preload 하여 Load 시점을 조정하여 해결
  * 메인 비주얼을 제외한 하단 이미지들을 Intersection Observer API를 활용하여 특정 구간에 도달하면 Load 
* UI 상 고퀄리티 차량 이미지를 겹쳐 사용하는데 이미지 용량을 줄일 수 있을까?  (Performance 10% 가량 개선)
  * png, jpg 보다 압축률이 낮아 퀄리티가 좋지만 용량은 더 낮은 .webp 활용   (이미지 개당 용량 100kb -> 20kb)
  * 이슈. 아직 webp를 지원하지 않는 브라우저를 위해  picture 태그로 분기처리.  webp를 지원하지 않으면 jpg가 보임
  * font-family를 분리하여 필요한 페이지에서만 로드하게끔 작업. + woff2 사용으로 용량 줄임
* Tab, Slide 보이지 않는 부분은 나중에 로드 시킬 수 있을까?
  * Script로 클릭 시 로드시킴
  * Tab UI Swiper.js 이슈.  동적으로 생성되는 DOM 감지를 못함.  Promise로 데이터 로드 후 동기적으로 변경 해결
* DOM의 파싱을 막는 요소들 처리 
  * 브라우저가 Script를 만나면 HTML 파싱을 멈추기 때문에  defer속성으로 해결
* 리플로우 최대한 제거
  * 레이아웃이 이루어진 HTML CSS가 다시 레이아웃이 되는 것을 최대한 막음. 리플로우가 발생하지 않는 CSS 사용 
* JS 병목현상 최대한 제거
  * JS 메인 스레드의 long task 걸린 부분들의 코드를 최대한 개선   
동적으로 DOM을 뿌릴 때 변수에 미리 저장 후 innerHTML에 넣음   
반복할 때 원하는 결과를 찾으면 반복을 break로 중지함   
자주 호출되는 이벤트에 쓰로틀, 디바운스 적용   


&nbsp;
&nbsp;
&nbsp;


### 5-3. 메인
<video src="https://github.com/ejonghwan/genesis/assets/53946298/06947db2-01f1-4a1e-b888-4ce66b777549" width="500" muted  autoplay loop></video>
##### 기능 설명
* 메인은 풀 사이즈 동영상 리소스를 활용했습니다.
* 첫 번째 DOM 요소는 이전 요소로 숨겨져 있고 다음 버튼을 누르면 DOM 순서 변경됩니다.
* 메인에서 필요한 2개의 폰트와 Poster 이미지 2개는 Preload하여  LCP 개선 및  FOIT, FOUT 최소화 했습니다.
* 슬라이드의 동영상은 재생되고 있는 부분을 제외한 영상들 모두 reset & stop 동적 제어됩니다.
* 이전/다음 버튼을 누르기 전 리소스들은 IMG로 대체. 무거운 동영상 파일 요청하지 않게 최적화 했습니다.


&nbsp;
&nbsp;
&nbsp;



### 5-4. 갤러리
<video src="https://github.com/ejonghwan/genesis/assets/53946298/f6a7c0fc-ad66-4dae-845f-fed092b6bc1e" width="500" muted  autoplay loop></video>
##### 기능 설명
* 플리커 API를 활용하여 내 갤러리에 제네시스 IMG를 등록 후 제네시스 갤러리를 만들었습니다.
* 검색 기능에서 제네시스를 검색하면 다른 유저들이 올린 제네시스 IMG를 볼 수 있습니다.
* IMG List 클릭 시 팝업 생성되며 본 사이즈 IMG 리소스를 화면에 표시합니다.


&nbsp;
&nbsp;
&nbsp;


### 5-5. 콘택
<video src="https://github.com/ejonghwan/genesis/assets/53946298/0d2e9299-0931-42f5-a18a-67a6d1483e6e" width="500" muted  autoplay loop></video>
##### 기능 설명
* map info json의 데이터를 받아 동적으로 지점, 주소, 전화, 보유차량 등을 뿌려주는데 Kakao API와 연결하는데 순서 주의하며 작업했습니다.
* Data를 JSON파일로 관리하며 각 지점 클릭시 맵을 이동 시킵니다.
* Email JS  서비스를 이용해서 사용자가 문의를 보내면 내 이메일로 전송되게 작업했습니다.
* 브라우저 리사이즈할 때 맵을 가운데로 이동시키는데 debounce 적용했습니다.

&nbsp;
&nbsp;
&nbsp;



### 5-6. 유튜브
<video src="https://github.com/ejonghwan/genesis/assets/53946298/d9007bc2-beec-4d96-87c9-4ce93562ef04" width="500" muted  autoplay loop></video>
##### 기능 설명
* Youtube API를 활용하여 특정 목록을 화면에 노출시켰습니다.
* 동영상 썸네일을 클릭하면 팝업이 뜨고 유튜브 영상을 볼 수 있습니다.

&nbsp;
&nbsp;
&nbsp;



### 5-7. 상품
<video src="https://github.com/ejonghwan/genesis/assets/53946298/62d7437d-3e0e-47f3-b5ee-b1c85b95874f" width="500" muted  autoplay loop></video>
##### 기능 설명
* 스크롤에 반응하여 인터렉션을 넣었습니다. 
* 많은 스크롤과 위치 정보량을 한곳에서 관리하게끔 작업했고 특정 계산을 하는 함수를 재사용하여 작업했습니다. 


&nbsp;
&nbsp;
&nbsp;



## UI는 접근성과 사용성을 고려해서 아래 처럼 제작했습니다. 
### 탭 UI 
<img src="https://github.com/ejonghwan/genesis/assets/53946298/56225029-a28c-4927-9d15-f4cd83c528f0" width="60%" height="auto"></img>

### 아코디언 UI 
<img src="https://github.com/ejonghwan/genesis/assets/53946298/7964b175-9a69-4745-b26e-bd7675417809" width="60%" height="auto"></img>




