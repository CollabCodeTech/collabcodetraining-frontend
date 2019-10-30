<script>
  import LogoCollab from '../components/LogoCollab.svelte'
  import TitleCollab from '../components/TitleCollab.svelte'
  import FormConfirmation from '../containers/FormConfirmation.svelte'
</script>

<style>
  .confirmation {
    display: flex;
    height: 100vh;
    justify-content: center;
  }

  .confirmation > .content {
    text-align: center;
    width: 320px;
    padding: var(--gap-medium) var(--gap-normal) var(--gap-big);
  }

  .confirmation :global(.logo-collab) {
    margin-bottom: var(--gap-medium);
  }

  .confirmation :global(.title-collab) {
    margin-bottom: var(--gap-big);
  }

  @media (min-height: 600px) {
    .confirmation {
      align-items: center;
    }
  }
</style>

<main class="confirmation">
  <div class="content">
    <LogoCollab />

    <TitleCollab content="confirmar conta" uppercase />
    <FormConfirmation />
  </div>
</main>
