<script>
  export let content = 'No content'
  export let forName = 'No id'
</script>

<style>
  .label-collab {
    color: var(--color-floral-white);
    font-size: var(--size-smallest);
    line-height: 1.5;
    letter-spacing: 0.15px;
  }
</style>

<label class="label-collab" for={forName}>{content}</label>
