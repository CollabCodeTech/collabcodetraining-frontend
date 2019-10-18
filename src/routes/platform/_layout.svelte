<script>
  import HeaderCollab from '../../containers/HeaderCollab.svelte'
  import MenuMobile from '../../containers/MenuMobile.svelte'

  export let segment

  const menu = [
    { href: 'platform/courses', label: 'Cursos', icon: 'courses' },
    { href: 'platform/classroom', label: 'Sala', icon: 'classroom' },
    { href: 'platform/profile', label: 'Profile', icon: 'profile' },
    { href: 'platform/alerts', label: 'Alertas', icon: 'alerts' },
  ]
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

<svelte:head>
  <title>CollabCode Training</title>
</svelte:head>

<main class="layout">
  <HeaderCollab />
  <slot />
  <MenuMobile {segment} {menu} />
</main>
