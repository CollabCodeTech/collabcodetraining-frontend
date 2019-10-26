<script>
  import LogoCollab from '../components/LogoCollab.svelte'
  import TitleCollab from '../components/TitleCollab.svelte'
  import FormLogin from '../containers/FormLogin.svelte'
  import LinkCollab from '../components/LinkCollab.svelte'
</script>

<style>
  .login {
    display: flex;
    height: 100vh;
    justify-content: center;
  }

  .login > .content {
    text-align: center;
    width: 320px;
    padding: var(--gap-medium) var(--gap-normal) var(--gap-big);
  }

  .login :global(.logo-collab) {
    margin-bottom: var(--gap-medium);
  }

  .login :global(.title-collab) {
    margin-bottom: var(--gap-big);
  }

  .login :global(.link-collab) {
    margin-top: var(--gap-normal);
  }

  @media (min-height: 600px) {
    .login {
      align-items: center;
    }
  }
</style>

<main class="login">
  <div class="content">
    <LogoCollab />

    <TitleCollab content="login" uppercase />
    <FormLogin />

    <LinkCollab action="signup" content="Criar conta" />
  </div>
</main>
