<script>
  import LogoCollab from '../components/LogoCollab.svelte'
  import TitleCollab from '../components/TitleCollab.svelte'

  import FormSignup from '../containers/FormSignup.svelte'
</script>

<style>
  .signup {
    display: flex;
    height: 100vh;
    justify-content: center;
  }

  .signup > .content {
    text-align: center;
    width: 320px;
    padding: var(--gap-medium) var(--gap-normal) var(--gap-big);
  }

  .signup :global(.logo-collab) {
    margin-bottom: var(--gap-medium);
  }

  .signup :global(.title-collab) {
    margin-bottom: var(--gap-big);
  }

  @media (min-height: 600px) {
    .signup {
      align-items: center;
    }
  }
</style>

<main class="signup">
  <div class="content">
    <LogoCollab />

    <TitleCollab content="Cadastro" uppercase />

    <FormSignup />
  </div>
</main>
