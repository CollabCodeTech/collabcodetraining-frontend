<script>
  import LogoCollab from '../components/LogoCollab.svelte'
  import SearchCollab from '../components/SearchCollab.svelte'
  import IconCollab from '../components/IconCollab.svelte'
</script>

<style>
  .header-collab {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    padding-left: var(--gap-medium);
    padding-right: var(--gap-medium);
  }

  :global(.header-collab) > .search-collab {
    --height: 44px;

    margin-left: var(--gap-medium);
    margin-right: var(--gap-medium);
    flex-grow: 2;
    height: var(--height);
  }

  @media (min-width: 1920px) {
  }
</style>

<header class="header-collab">
  <LogoCollab />

  <SearchCollab />
  <IconCollab name="more_vert" alt="Mais informações" />
</header>
