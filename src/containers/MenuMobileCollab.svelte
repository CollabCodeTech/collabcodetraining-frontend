<script>
  import IconCollab from '../components/IconCollab.svelte'
  export let segment
  export let menu
</script>

<style>

</style>

<nav>
  <ul>
    {#each menu as option}
      <li>
        <a
          class={segment === undefined ? 'selected' : ''}
          href={option.toLowerCase()}>
          <IconCollab alt={option.toLowerCase()} />
          {option}
        </a>
      </li>
    {/each}
  </ul>
</nav>
