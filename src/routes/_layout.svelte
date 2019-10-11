<script>
  import HeaderCollab from '../containers/HeaderCollab.svelte'
  import LikeCollab from '../components/LikeCollab.svelte'
  import DeslikeCollab from '../components/DeslikeCollab.svelte'

  export let segment
</script>

<style>

</style>

<HeaderCollab />

<main>
  <slot />
  <LikeCollab />
  <DeslikeCollab />
</main>
