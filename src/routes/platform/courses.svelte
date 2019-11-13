<script context="module">
  import UserService from '../../services/user.service'

  export async function preload() {}
</script>

<script>
  import { goto } from '@sapper/app'
  import { onMount } from 'svelte'
  import TitleCollab from '../../components/TitleCollab.svelte'

  let showStatus

  onMount(async () => {
    try {
      const { status, data } = await UserService.validate()

      console.log('ENTRO!!!')

      if (status !== 200) {
        goto('login')

        return false
      }

      showStatus = status
    } catch (error) {
      goto('login')
    }
  })
</script>

{#if showStatus === 200}
  <TitleCollab content="Um dia serei a página de Cursos" />
{/if}
