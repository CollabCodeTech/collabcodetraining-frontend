<script>
  export let LabelCollab
  export let content = 'No text'
</script>

<style>
  .label-collab {
    display: inline-block;
    width: var(--size-biggest);
    height: var(--size-normal);
    margin-right: var(--gap-small);
    box-sizing: border-box;

    font-family: inherit;
    line-height: var(--size-normal);
    font-size: var(--size-subtitle-first);
    text-transform: uppercase;
    text-align: center;
    color: var(--color-floral-white);

    background-color: var(--color-fiery-rose);
    border-radius: var(--size-normal);
  }
</style>

<label class="label-collab">{content}</label>
