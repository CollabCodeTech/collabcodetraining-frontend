<script>
  import IconCollab from './IconCollab.svelte'

  export let onClick
  export let changeOrientation
  export let setElapsedTime
  export let paused = true
  export let elapsedTime = '00:00'
  export let duration = '00:00'
  export let progress = 0
</script>

<style>
  .control-collab {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding-left: var(--gap-normal);
    padding-right: var(--gap-normal);
    background-color: var(--color-arsenic-light);
  }

  .control-collab > :global(li) {
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
  }

  .control-collab > .playAndStop {
    --size: 24px;

    position: relative;
    width: var(--size);
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
    font-weight: var(--size-weight-light);
    margin-right: var(--gap-small);
    width: 38px;
  }

  .control-collab > .progress {
    --height: 5px;

    position: relative;
    color: transparent;
    background-color: var(--color-eggshell-light);
    flex-grow: 2;
    height: var(--height);
    border-radius: calc(var(--height) / 2);
    overflow: hidden;
    margin-right: var(--gap-small);
  }

  .control-collab > .progress::before {
    content: '';

    position: absolute;
    background-color: var(--color-fiery-rose);
    top: 0;
    left: 0;
    width: 100%;
    height: var(--height);
    border-radius: calc(var(--height) / 2);
    transform-origin: left center;
    transform: scaleX(var(--progress));
  }
</style>

<ul class="control-collab" on:click|stopPropagation>
  <li class={`playAndStop ${paused ? '-play' : '-pause'}`} on:click={onClick}>
    <IconCollab className="play" name="play_arrow" alt="Inciar Vídeo" />
    <IconCollab className="pause" name="pause" alt="Pausar vídeo" />
  </li>
  <li class="time overline">{elapsedTime}</li>
  <li
    class="progress"
    style={`--progress: ${progress}`}
    on:click={setElapsedTime} />
  <li class="time overline">{duration}</li>
  <li class="screen" on:click={changeOrientation}>
    <IconCollab
      className="fullscreen"
      name="fullscreen"
      alt="Vídeo em tela cheia" />
  </li>
  <li class="more">
    <IconCollab
      className="more_vert"
      name="more_vert"
      alt="Mais informações do vídeo13" />
  </li>
</ul>
