# 제출하는법

## 시작

과제가 존재하면 파랑색 완료되었으면 초록색 없다면 회색이다.

터미널에 입력하여 dev 서버를 연다.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

그리고 [http://localhost:3000](http://localhost:3000) 를 브라우저에서 연다.

app 폴더안에 자기가 과제를 제출할 폴더 _(폴더 이름이 url이므로 유의하여 정한다.)_ 를 만들고 page.jsx를 만든다.

```jsx
//page.jsx

import Main from "@/components/Main";

export default function Page() {
  /**
   * @notice You can edit only this
   */
  let url = "edit here";

  let complete = 1;
  return (
    <>
      <Main complete={complete} url={url}></Main>
    </>
  );
}
```

이후 과제 번호 폴더 _(ex. 1, 2, 3)_ 를 만든뒤 그안에 과제를 제출한다.
