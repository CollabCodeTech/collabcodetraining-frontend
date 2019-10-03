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
    opacity: 0;
  }

  .search-collab.-active > .input {
    opacity: 1;
  }

  .search-collab > .button {
    position: relative;
    z-index: 1;
    margin-left: auto;
    cursor: pointer;
  }

  .search-collab.-active > .button {
    opacity: 0;
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
