<script>
  export let content = 'No content'
  export let action = 'No action'
</script>

<style>
  .link-collab {
    display: block;
    color: var(--color-floral-white);
    font-size: var(--size-body-first);
    letter-spacing: 0.5px;
    line-height: 1.5em;
    text-decoration: none;
  }
</style>

<a class="link-collab" href={action}>{content}</a>
