<script>
  export let content
</script>

<style>
  .warning-label {
    display: inline-block;
    color: var(--color-sandstorm);
    font-size: var(--size-smallest);
    font-weight: var(--size-weight-bold);
  }
</style>

<label class="warning-label">{content}</label>
