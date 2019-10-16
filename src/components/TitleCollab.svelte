<script>
  export let content = ''
  export let uppercase = false
</script>

<style>
  .title-collab {
    color: var(--color-floral-white);
  }

  .title-collab.-uppercase {
    text-transform: uppercase;
    font-size: var(--size-small);
    line-height: 1.5;
    letter-spacing: 3px;
  }
</style>

<h6 class={`title-collab ${uppercase && '-uppercase'}`}>{content}</h6>
