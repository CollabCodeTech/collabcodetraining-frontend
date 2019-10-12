<script>
  import HeaderCollab from '../containers/HeaderCollab.svelte'
  import LikeCollab from '../components/LikeCollab.svelte'
  import DislikeCollab from '../components/DislikeCollab.svelte'

  export let segment
</script>

<style>

</style>

<HeaderCollab />

<main>
  <slot />
  <LikeCollab />
  <DislikeCollab />
</main>
