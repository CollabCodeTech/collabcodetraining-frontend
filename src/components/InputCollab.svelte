<script>
  export let type = 'text'
  export let name = 'No name'
  export let placeholder = 'No placeholder'
</script>

<style>
  .input-collab {
    color: var(--color-fiery-rose);
    font-size: var(--size-smallest);
    letter-spacing: 0.15px;
    background-color: transparent;
    padding-bottom: var(--gap-normal);
    border-bottom: 1px solid var(--color-floral-white);
  }
</style>

<input class="input-collab" {type} {name} {placeholder} />
