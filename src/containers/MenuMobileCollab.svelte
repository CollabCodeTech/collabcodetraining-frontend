<script>
  import IconCollab from '../components/IconCollab.svelte'
  export let segment
  export let menu
</script>

<style>
  .menu-mobile {
    background: var(--color-arsenic);
    border-top: 2px solid var(--color-pomp-and-power);
  }

  .menu-mobile > .menu-list {
    display: flex;
    justify-content: space-between;
    padding: var(--gap-normal);
  }

  .menu-mobile > .menu-list > .menu-option > a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: white;
  }

  .menu-mobile > .menu-list > .menu-option > :global(a.-selected) {
    color: var(--color-fiery-rose);
  }
</style>

<nav class="menu-mobile">
  <ul class="menu-list">
    {#each menu as option}
      <li class="menu-option">
        <a
          href={option.toLowerCase()}
          class={segment === option.toLowerCase() ? '-selected' : ''}>
          
            <IconCollab
              alt={`Página de ${option.toLowerCase()}`}
              name={option && option.toLowerCase() === segment ? `${option.toLowerCase()}-selected`: option.toLowerCase()} />
        
          {option}
        </a>
      </li>
    {/each}
  </ul>
</nav>
