기간 : 수요일 22시까지
submit 폴더에 자기이름 폴더 만들어서 project 폴더 올리기
=
css파일은 쓰고싶으면 쓰세요 첨부는 해둠
=
button은 reset누르면 초기화 + 누를시 +1 - 누를시 -1
=
object 페이지에 map함수를 이용해 목록 3개를 만들고 제목에 ["first", "second", "third"] 넣기
나도 이해안되니깐 사진보고 ㄱ 모르는건 물어보세요
버튼의 초기값은 0 0 0 입니다.
=
뒤로가기 화살표와
floating action manu(Fab)를 만들거에요
대충 컴포넌트로 메인화면갈수있는 화살표를 만들어주세요 css는 알아서 쓰던가
Fab는 제가 부족해서 css못하겠으니깐 저렇게 하자있는상태로 만들면 되구요
저거 누르면 대충 이동하게 해줘요 map써볼랬는데 안써져서 쓸자신있으면
알아서 써보세요 가산점드릴게여 마우스 올리면 나오고 때면 사라져요 빡셀수도
써야하는것: 컴포넌트로 만들기, 거기서 prop받아오기(location), Link, useState, style={ condition ? isTrue : isFalse}, "use Client", onMouseEnter, onMouseLeave
나도 모르겠으니깐 모르는거 물어봐유
=
mongodb를 이용해서 page를 만들어봐요
연결 url: mongodb+srv://next-check-auth:vq2tFVWkALpV8@msg2324.ht0vcrp.mongodb.net/?retryWrites=true&w=majority
database이름은 next-check 컬렉션 이름은 mongo입니다
let db = (await connectDB).db("next-check");
let result = await db.collection("mongo").~
이 url이용해서 강의 5강쯤 까지의 내용을 이용해 (사실 따라하면 그만) 페이지를 만들어보아요 esay하니깐
mongo페이지는 사진처럼 db불러와서 만들고
detail도 똑같이 사진처럼
fab는 방치해도 무방해요
월요일 22시까지 할게염
김도원 O ★★★★☆(fab css완성해오면 5개 드릴게염)
김선우 X
=
글작성기능을 만들어봐요 진도가 너무 빠른감이 없지않아 많은데 그건 알아서 조정할 미래의 저에게 넘기고 대충해봅시다
데이터베이스 주소는 대충 이거쓰시고요(같은db 새로운 컬렉션에서 진행함)
let db = (await connectDB).db("next-check");
let result = await db.collection("write").~
여따 글작성페이지랑 작성하면 db에 올라가게해서 대충 3개만 작성해봅시다
아 프론트에서도 글작성 규칙에 안맞으면 막고 서버에서도 막아보면 좋을걸요 한번해보세요
try catch문 쓰시면되구요 프론트는 대충 if문하고 console에 안된다해도되고 뭐 글로쓰던가 알아서 하쇼
너무 변형 없는거 아니냐고 귀찮은거 아니냐 물어봐도 귀찮은거 맞고 시간도없으니 죄송(笑)
기간은 화요일 22시까지
=
오늘의 숙제 :

Q. 연습삼아서 회원가입기능을 만들어옵시다.

- 유저가 회원가입페이지에서 아이디, 비번을 입력하고 전송버튼 누르면 그 데이터를 DB의 컬렉션에 보관해두면 그게 회원가입기능 아니겠습니까.

- 물론 비번은 암호화해서 저장하는게 좋지만 지금은 무시하고 기능만 만들어봅시다.

- 이미 존재하는 아이디로는 가입할 수 없게 막아야합니다.
  ^^7 글작성기능 만들기 2강에 들어있는 숙제에요 해와요 궁금한거 문의하시고 css는 아직안만들어서 알아서 해보시던가 부탁하면 언젠가는 드리겠죠뭐 갈수록 말투 싸가지없어지는거 코딩애플 닮아가는것같아 무서운데
  기한은 대충 목요일 22시 까지
