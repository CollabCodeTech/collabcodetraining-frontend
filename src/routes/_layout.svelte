<script>
  import HeaderCollab from '../containers/HeaderCollab.svelte'
  import MenuMobileCollab from '../containers/MenuMobileCollab.svelte'

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

<MenuMobileCollab {segment} {menu} />
