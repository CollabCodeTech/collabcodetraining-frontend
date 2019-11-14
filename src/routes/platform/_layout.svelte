<script>
  import { goto } from '@sapper/app'
  import { beforeUpdate } from 'svelte'

  import UserService from '../../services/user.service'
  import HeaderCollab from '../../containers/HeaderCollab.svelte'
  import MenuMobile from '../../containers/MenuMobile.svelte'

  export let segment

  const menu = [
    { href: 'platform/courses', label: 'Cursos', icon: 'courses' },
    { href: 'platform/classroom', label: 'Sala', icon: 'classroom' },
    { href: 'platform/profile', label: 'Profile', icon: 'profile' },
    { href: 'platform/alerts', label: 'Alertas', icon: 'alerts' },
  ]

  let showPage = false

  async function authorize() {
    try {
      const { status, data } = await UserService.validate()

      if (status !== 200) {
        goto('login')

        return false
      }

      showPage = status === 200
    } catch (error) {
      goto('login')
    }
  }

  beforeUpdate(authorize)
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

{#if showPage}
  <main class="layout">
    <HeaderCollab />
    <slot />
    <MenuMobile {segment} {menu} />
  </main>
{/if}
