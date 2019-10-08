<script>
  import HeaderCollab from '../containers/HeaderCollab.svelte'
  import MenuMobileCollab from '../containers/MenuMobileCollab'

  export let segment

  const menu = ['Cursos', 'Sala', 'Profile', 'Alertas']
</script>

<style>

</style>

<HeaderCollab />

<main>
  <slot />
</main>

<MenuMobileCollab {segment} {menu} />
