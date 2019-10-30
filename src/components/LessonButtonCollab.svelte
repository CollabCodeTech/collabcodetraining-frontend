<script>
  export let active = false
  export let namespace = '/platform/classroom/v1'
  export let number
</script>

<style>
  .lesson {
    --lesson-size: 50px;
    display: inline-block;
    box-sizing: border-box;
    width: var(--lesson-size);
    height: var(--lesson-size);
    margin: auto var(--gap-normal);

    background: var(--color-floral-white);
    color: var(--color-granite-grey);
    border-radius: 50%;
    border: 2px solid transparent;

    font-size: var(--size-smallest);
    text-align: center;
    line-height: var(--lesson-size);
    letter-spacing: 0.15px;
    text-decoration: none;
  }

  .lesson.-active,
  .lesson:hover {
    background-color: var(--color-fiery-rose);
    color: var(--color-floral-white);
  }
  .lesson.-active {
    --lesson-size: 60px;
  }
  .lesson:not(.-active):hover {
    --lesson-size: 50px;
    border: 2px solid var(--color-floral-white);
  }
</style>

<a class={`lesson ${active && '-active'}`} href={`${namespace}/${number}`}>
  {String(number).padStart(3, '0')}
</a>
