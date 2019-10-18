<script>
  export let content = '...'
</script>

<style>
  .tag-collab {
    display: inline-block;
    width: var(--size-biggest);
    height: var(--size-normal);
    margin-right: var(--gap-small);
    box-sizing: border-box;

    font-family: inherit;
    line-height: var(--size-normal);
    font-size: var(--size-overline);
    text-transform: uppercase;
    text-align: center;
    color: var(--color-floral-white);

    background-color: var(--color-fiery-rose);
    border-radius: var(--size-normal);
  }
</style>

<label class="tag-collab">{content}</label>
