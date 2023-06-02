![Next Badge](https://img.shields.io/badge/NEXT.js-000000?style=flat-square&logo=Next.js&logoColor=white)
![TypeScript Badge](https://img.shields.io/badge/Typescript-235A97?style=flat-square&logo=Typescript&logoColor=white)
![Cypress Badge](https://img.shields.io/badge/Cypress-17202C?style=flat-square&logo=Cypress&logoColor=white)
![Docker Badge](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
<img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=react query&logoColor=white"/>

# Folder Structure (~ing)

```
|--🗂️ .github
|--🗂️ cypress (e2e관련 폴더)
|--🗂️ public (public 파일)
|--🗂️ src
   |--🗂️ assets (에셋)
   |--🗂️ common (전체 프로젝트가 공유하는 common 파일)
        |--🗂️ color
            |--📑 index.ts
   |--🗂️ components (전체 컴포넌트가 공유하는 컴포넌트)
        |--🗂️  Header
            |--📑 Header.style.tsx
            |--📑 Header.tsx
            |--📑 index.ts
   |--🗂️ hooks (전역적 hook 정의)
        |--📑 useIntersectionObserver.ts
   |--🗂️ layouts (Layout 컴포넌트 정의)
        |--🗂️Landing
            |-- ....
   |--🗂️ lib (axios 미들웨어)
   |--🗂️ pages
        |--🗂️ auth
            |--🗂️ subcomponents (auth 페이지 내부에서만(signIn, signUp) 사용되는 공통 컴포넌트 정의)
                |--🗂️ AuthContainer
                |--🗂️ AuthenticationMessage
            |--📁 signIn
                |--🗂️ constants (signIn 내부에서만 사용하는 상수 정의)
                |--🗂️ subcomponents (signIn 페이지 내부에서만 사용하는 컴포넌트 정의)
                    |--🗂️ OAuthButton
                |--📑 index.ts
                |--📑 SignIn.style.tsx
                |--📑 SignIn.tsx
            |--🗂️ SignUp (signIn과 내부 구조 동일)
   |--🗂️ query-hooks (react-query 관련 폴더, 큰 틀의 명사 => 관심사로 분류)
        |--🗂️ useUser
            |--📁 GET
                |--📑 api.ts
                |--📑 api.type.ts
                |--📑 index.ts
                |--📑 useFetchLoginStatus.ts
            |--📁 POST
            |--📑 index.ts
            |--📑 useUser.keys.ts
   |--🗂️ styles (global 스타일 정의)
   |--🗂️ types (global 타입 정의)
   |--🗂️ utils (global util 정의)
```

# Description

##### Nimble Meet 프론트엔드 리퍼지토리

# Running the app

```bash
$ docker-compose up
```

# Test

```bash
$ yarn run cy:run -- --record --spec "cypress/e2e"
```
