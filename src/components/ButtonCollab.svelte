<script>
  export let label = ''
</script>

<style>
  .button-collab {
    --height: 56px;

    border: none;
    background-color: var(--color-fiery-rose);
    color: var(--color-floral-white);
    border-radius: 14px;
    font-family: 'Comfortaa', sans-serif;
    text-transform: uppercase;
    font-size: var(--size-smallest);
    display: flex;
    width: 100%;
    max-width: 380px;
    align-items: center;
    justify-content: center;
    padding: 14px 44px;
    cursor: pointer;
    transition: 200ms linear;
  }

  .button-collab:hover {
    background-color: var(--color-bisque);
    color: var(--color-fiery-rose);
  }
</style>

<button class="button-collab" type="submit">{label}</button>
