<script>
  import LogoCollab from '../components/LogoCollab.svelte'
  import TitleCollab from '../components/TitleCollab.svelte'

  import FormSignup from '../containers/FormSignup.svelte'
</script>

<style>
  .signup {
    text-align: center;
    padding: var(--gap-medium) var(--gap-normal) var(--gap-big);
  }

  .signup > :global(.logo-collab) {
    margin-bottom: var(--gap-medium);
  }

  .signup > :global(.title-collab) {
    margin-bottom: var(--gap-big);
  }
</style>

<main class="signup">
  <LogoCollab />

  <TitleCollab content="Cadastro" uppercase />

  <FormSignup />
</main>
