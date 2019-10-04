<script>
  import IconCollab from './IconCollab.svelte'

  export let paused = true
  export let onClick
</script>

<style>
  .control-collab {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-left: var(--gap-normal);
    padding-right: var(--gap-normal);
    background-color: var(--color-arsenic-light);
  }

  .control-collab > :global(li) {
    cursor: pointer;
  }

  .control-collab > .playAndStop {
    --size: 24px;

    position: relative;
    display: flex;
    width: var(--size);
    height: 100%;
    align-items: center;
    margin-right: var(--gap-small);
  }

  .control-collab > .playAndStop > :global(img) {
    position: absolute;
    width: var(--size);
    height: var(--size);
    opacity: 0;
    transition: opacity 150ms linear;
  }

  .control-collab > .playAndStop > :global(img)::selection {
    background: transparent;
  }

  .control-collab > .playAndStop.-play > :global(.play) {
    opacity: 1;
  }

  .control-collab > .playAndStop.-pause > :global(.pause) {
    opacity: 1;
  }

  .control-collab > .time {
    color: var(--color-floral-white);
  }
</style>

<ul class="control-collab" on:click|stopPropagation>
  <li class={`playAndStop ${paused ? '-play' : '-pause'}`} on:click={onClick}>
    <IconCollab className="play" name="play_arrow" alt="Inciar Vídeo" />
    <IconCollab className="pause" name="pause" alt="Pausar vídeo" />
  </li>
  <li class="time overline">1:34</li>
  <li class="progress" />
  <li class="duration" />
  <li class="screen" />
</ul>
