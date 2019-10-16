## 기여

이 프로젝트는 MPL 2.0 라이센스에 따라 배포됩니다.
새로운 기능 및 변경 사항을 구현하기 전에, 편하게 [이슈 등록](https://github.com/CollabCodeTech/collabcodetraining-frontend/issues/new)을 해주세요.
우리는 이 곳에서 얘기할 것입니다. :stuck_out_tongue_winking_eye:.

### 행동 강령

이 프로젝트는 기여자 규약 [행동 강령](CODE_OF_CONDUCT_ko.md)을 따릅니다.
참여하기 위해서 강령을 준수해야합니다. 허용되지 않은 행동은 [gueio@collabcode.tech](mailto:gueio@collabcode.tech)로 보고바랍니다.

### 이슈와 질문

질문이 있으면 유용한 조언을 해줄 수 있는 공식 [Discord](https://discord.gg/YeeEAYj) 서버가 있습니다.

## 풀 리퀘스트를 보내는 방법

1. 포크 [해당 저장소](https://github.com/CollabCodeTech/collabcodetraining-frontend/fork).
2. 기능 이름으로 새 브랜치를 생성 (예시: feature/chat-support, hotfix/website-header)
3. 변경
4. 변경 사항을 커밋. [스타일가이드](#스타일가이드)를 참고
5. 변경 사항을 푸쉬
6. 풀리퀘스트를 제출

우리는 [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/)를 사용하므로
당신의 PR이 `hotfix`가 아니라면,`develop` 브랜치로 부터 기능브랜치를 생성해야합니다.

**팁:** [Git extension](https://github.com/nvie/gitflow) 는 Git flow를 쉽게 이해시켜줄 것입니다.
GitKraken도 GitFlow를 위한 [built-in support](https://support.gitkraken.com/git-workflows-and-extensions/git-flow/)가 있습니다.

## 스타일가이드
### 깃 커밋 스타일 가이드

* 현재 시제 사용 ("Added feature"가 아닌 "Add feature")
* 명령어 사용 ("Moves cursor to..."가 아닌 "Move cursor to...")
* 첫 번째 행을 72자 이하로 제한
* 첫 번째 줄 이후 자유롭게 이슈 참조 및 풀리퀘스트 작성
* 이모지로 커밋 메시지를 시작하는 것을 고려 :
    * :art: `:art:` 코드의 형식/구조 개선 시
    * :zap: `:zap:` 퍼포먼스 향상 시
    * :pencil: `:pencil:` 문서 작성 시
    * :penguin: `:penguin:` 리눅스에서 무언가를 고칠 시
    * :apple: `:apple:` 맥에서 무언가를 고칠 시
    * :checkered_flag: `:checkered_flag:` 윈도우에서 무언가를 고칠 시
    * :bug: `:bug:` 버그를 고칠 시
    * :fire: `:fire:` 코드나 파일을 삭제할 시
    * :green_heart: `:green_heart:` CI build를 고칠 시
    * :white_check_mark: `:white_check_mark:` 테스트를 추가하거나 업데이트할 시
    * :lock: `:lock:` 보안을 다룰 시
    * :arrow_up: `:arrow_up:` 디펜던시들을 업그레이드할 시
    * :arrow_down: `:arrow_down:` 디펜던시들을 다운그레이드할 시
    * :rotating_light: `:rotating_light:` 잔 경고들을 제거할 시
* 모든 이모지들 [gitmoji](https://gitmoji.carloscuesta.me/)

### 프론트엔드 스타일가이드 & 레이아웃

레이아웃을 [Figma](https://www.figma.com/file/gL5DC1W2R9zhfCRRXAjJGn/CollabWorld.training?node-id=1%3A384) 에서 확인하세요.
레이아웃을 보려면 Figma에 로그인해야 합니다.
