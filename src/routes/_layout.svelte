<script>
  import HeaderCollab from '../containers/HeaderCollab.svelte'
  import MenuMobile from '../containers/MenuMobile.svelte'

  export let segment

  const menu = ['Cursos', 'Sala', 'Profile', 'Alertas']
</script>

<style>
  .layout {
    padding-bottom: 60px;
    margin-bottom: var(--gap-medium);
  }

  .layout > :global(.menu-mobile) {
    position: fixed;
    bottom: 0;
    width: 100vw;
  }
</style>

<main class="layout">
  <HeaderCollab />
  <slot />
  <MenuMobile {segment} {menu} />
</main>
