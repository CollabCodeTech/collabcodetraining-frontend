<script>
  export let LabelCollab
  export let message = 'No text'
</script>

<style>
  .label-collab {
    /* size */
    display: inline-block;
    width: var(--size-biggest);
    height: var(--size-normal);
    margin: 0 var(--gap-small) 0;
    box-sizing: border-box;

    /* font configuration */
    font-family: inherit;
    line-height: var(--size-normal);
    font-size: var(--size-subtitle-first);
    text-transform: uppercase;
    text-align: center;
    color: var(--color-floral-white);

    /* box configuration */
    background-color: var(--color-fiery-rose);
    border-radius: var(--size-normal);
  }
</style>

<label class="label-collab">{message}</label>
