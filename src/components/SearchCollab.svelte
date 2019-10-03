<script>
  import IconCollab from './IconCollab.svelte'

  let active = false

  function toggleActive() {
    active = !active
  }
</script>

<style>
  .search-collab {
    display: flex;
    position: relative;
  }

  .search-collab > .input {
    height: 100%;
    background-color: var(--color-floral-white-light);
    border: none;
    border-radius: calc(var(--height) / 2);
    padding-left: var(--gap-medium);
    padding-right: var(--gap-medium);
    font-family: inherit;
    color: var(--color-floral-white);
    position: absolute;
    right: 0;
    width: 100%;
    transform-origin: right center;
    transform: scaleX(0);
    opacity: 0;
    transition: opacity 100ms linear, transform 200ms linear;
  }

  .search-collab.-active > .input {
    transform: scaleX(1);
    opacity: 1;
  }

  .search-collab > .button {
    position: relative;
    z-index: 1;
    margin-left: auto;
    cursor: pointer;
    opacity: 1;
    transition: opacity 150ms linear, transform 200ms linear;
  }

  .search-collab.-active > .button {
    opacity: 0;
    transform: translateX(10px) scale(0.5);
  }
</style>

<form class={`search-collab ${active && '-active'}`}>
  <input class="input subtitle-second" type="search" placeholder="Buscar" />
  <input
    class="button"
    type="image"
    alt="Buscar"
    src="img/dark/icon/search.svg"
    on:click|preventDefault={toggleActive} />
</form>
