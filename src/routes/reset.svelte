<script>
  import LogoCollab from '../components/LogoCollab.svelte'
  import TitleCollab from '../components/TitleCollab.svelte'
  import FormReset from '../containers/FormReset.svelte'
</script>

<style>
  .reset {
    display: flex;
    height: 100vh;
    justify-content: center;
  }

  .reset > .content {
    text-align: center;
    width: 320px;
    padding: var(--gap-medium) var(--gap-normal) var(--gap-big);
  }

  .reset :global(.logo-collab) {
    margin-bottom: var(--gap-medium);
  }

  .reset :global(.title-collab) {
    margin-bottom: var(--gap-big);
  }

  @media (min-height: 600px) {
    .reset {
      align-items: center;
    }
  }
</style>

<main class="reset">
  <div class="content">
    <LogoCollab />

    <TitleCollab content="resetar senha" uppercase />
    <FormReset />
  </div>
</main>
