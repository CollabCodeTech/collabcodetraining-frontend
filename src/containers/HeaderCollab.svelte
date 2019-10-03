<script>
  import LogoCollab from '../components/LogoCollab.svelte'
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

  :global(.header-collab) > .search {
    margin-left: auto;
    margin-right: var(--gap-medium);
  }
</style>

<header class="header-collab">
  <LogoCollab />

  <IconCollab className="search" name="search" alt="Buscar conteúdo no site" />
  <IconCollab name="more_vert" alt="Mais informações" />
</header>
