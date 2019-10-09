<script>
  import IconCollab from '../components/IconCollab.svelte'
  export let segment
  export let menu
</script>

<style>
  .menu-mobile {
    background-color: var(--color-arsenic);
    border-top: 2px solid var(--color-pomp-and-power);
  }

  .menu-mobile > .list {
    display: flex;
    justify-content: space-between;
    padding: var(--gap-normal);
  }

  .menu-mobile .action {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: white;
  }

  .menu-mobile .action.-selected {
    color: var(--color-fiery-rose);
  }
</style>

<nav class="menu-mobile">
  <ul class="list">
    {#each menu as option}
      <li class="option">
        <a
          href={option.toLowerCase()}
          class={`action ${segment === option.toLowerCase() ? '-selected' : ''}`}>

          <IconCollab
            alt={`Página de ${option.toLowerCase()}`}
            name={option && option.toLowerCase() === segment ? `${option.toLowerCase()}-selected` : option.toLowerCase()} />
          {option}
        </a>
      </li>
    {/each}
  </ul>
</nav>
