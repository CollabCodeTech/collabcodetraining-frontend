<script>
  import HeaderCollab from '../containers/HeaderCollab.svelte'
  import MenuMobile from '../containers/MenuMobile.svelte'

  export let segment

  const menu = ['Cursos', 'Sala', 'Profile', 'Alertas']
</script>

<style>
  :global(.menu-mobile) {
    position: fixed;
    bottom: 0;
    width: 100vw;
  }
</style>

<HeaderCollab />

<main>
  <slot />
</main>

<MenuMobile {segment} {menu} />
