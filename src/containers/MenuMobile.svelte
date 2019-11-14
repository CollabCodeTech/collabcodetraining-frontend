<script>
  import IconCollab from '../components/IconCollab.svelte'
  export let segment
  export let menu
</script>

<style>
  .menu-mobile {
    background-color: var(--color-arsenic);
    border-top: 2px solid var(--color-pomp-and-power);
    box-shadow: 0px -2px 4px var(--color-dark-slate-grey);
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
    {#each menu as { href, label, icon }}
      <li class="option">
        <a
          {href}
          rel="prefetch"
          class={`action ${segment === icon ? '-selected' : ''}`}>
          <IconCollab
            alt={`Página de ${label}`}
            name={icon && icon === segment ? `${icon}-selected` : icon} />
          {label}
        </a>
      </li>
    {/each}
  </ul>
</nav>
