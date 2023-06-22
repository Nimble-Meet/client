![Next Badge](https://img.shields.io/badge/NEXT.js-000000?style=flat-square&logo=Next.js&logoColor=white)
![TypeScript Badge](https://img.shields.io/badge/Typescript-235A97?style=flat-square&logo=Typescript&logoColor=white)
![Cypress Badge](https://img.shields.io/badge/Cypress-17202C?style=flat-square&logo=Cypress&logoColor=white)
![Docker Badge](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
<img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=react query&logoColor=white"/>

# Folder Structure

```
|--🗂️ .github
|--🗂️ cypress (e2e관련 폴더)
|--🗂️ public (public 파일)
|--🗂️ src
   |--🗂️ app (next13 app dir)
      |--🗂️ auth
               |--🗂️ signIn
                   |--🗂️ constants (signIn 내부에서만 사용하는 상수 정의)
                   |--📑 layout.tsx (next13 layout)
                   |--📑 page.tsx (next13 page)
                   |--📑 error.tsx (next13 error)
                   |--📑 loading.tsx (next13 loading)
               |--🗂️ SignUp (signIn과 내부 구조 동일)
   |--🗂️ assets (에셋)
   |--🗂️ common (전체 프로젝트가 공유하는 common 파일)
        |--🗂️ animation
            |--📑 move.ts
            |--📑 size.ts
        |--🗂️ color
            |--📑 index.ts
   |--🗂️ components (관심사별로 묶은 컴포넌트)
        |--🗂️ Auth (관심사)
            |--🗂️ @subComponents (Auth 관심사에서 사용하는 subComponent)
                |--🗂️ AuthContainer
                |--🗂️ AuthGuide
                |--🗂️ OAuthButton
                |--📑 index.ts
            |--🗂️ InputContainer
                |--📑 InputContainer.style.tsx
                |--📑 InputContainer.tsx
                |--📑 index.ts
            |--🗂️ SamePasswordCheckInput
            |--🗂️ ServiceInfoContainer
            |--📑 index.ts
        |--🗂️ Landing (관심사)
        |--🗂️ Main (관심사)
        |--🗂️ Ui (전체 컴포넌트가 공유할만한 Ui 컴포넌트)
            |--🗂️ Header
                |--📑 Header.style.tsx
                |--📑 Header.tsx
                |--📑 index.ts
            |--🗂️ Footer
   |--🗂️ hooks (전역 hook 정의)
        |--📑 useIntersectionObserver.ts
   |--🗂️ lib (axios 미들웨어 등)
   |--🗂️ query-hooks (react-query 관련 폴더, 큰 틀의 명사 => 관심사로 분류)
        |--🗂️ useUser
            |--🗂️ GET
                |--📑 api.ts
                |--📑 api.type.ts
                |--📑 index.ts
                |--📑 useFetchLoginStatus.ts
            |--🗂️ POST
            |--📑 index.ts
            |--📑 useUser.keys.ts
   |--🗂️ styles (global 스타일 정의)
   |--🗂️ utils (global util 정의)
        |--🗂️ Auth (관심사)
            |-- common.ts
            |-- validation.ts
        |--🗂️ Main (관심사)
            |-- time.ts
   |--📑 index.d.ts (global type 정의)
```

# Description

##### Nimble Meet 프론트엔드 리퍼지토리

# .env

```yml
REACT_APP_SERVER_DOMAIN_URL=<host>
CYPRESS_PROJECT_ID=<random secret>
```

# Running the app

```bash
$ docker-compose up
```

# Test

```bash
$ yarn run cy:run -- --record --spec "cypress/e2e"
```
