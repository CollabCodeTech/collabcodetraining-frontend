<script>
  import IconCollab from './IconCollab.svelte'

  export let play
  export let changeOrientation
  export let disableActiveControl
  export let showMore
  export let setElapsedTime
  export let paused = true
  export let fullscreen = false
  export let elapsedTime = '00:00'
  export let duration = '00:00'
  export let progress = 0
</script>

<style>
  .player-control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding-left: var(--gap-normal);
    padding-right: var(--gap-normal);
    background-color: var(--color-arsenic-light);
  }

  .player-control > :global(li) {
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
  }

  .player-control > :global(li) > :global(img) {
    transition: transform 100ms linear;
  }

  .player-control > :global(li):hover > :global(img) {
    transform: scale(1.3);
  }

  .player-control > .playAndStop {
    --size: 24px;

    position: relative;
    width: var(--size);
    margin-right: var(--gap-small);
  }

  .player-control > .playAndStop > :global(img) {
    position: absolute;
    width: var(--size);
    height: var(--size);
    opacity: 0;
    transition: opacity 150ms linear, transform 100ms linear;
  }

  .player-control > .playAndStop > :global(img)::selection {
    background: transparent;
  }

  .player-control > .playAndStop.-play > :global(.play) {
    opacity: 1;
  }

  .player-control > .playAndStop.-pause > :global(.pause) {
    opacity: 1;
  }

  .player-control > .time {
    color: var(--color-floral-white);
    font-weight: var(--size-weight-light);
    margin-right: var(--gap-small);
    width: 38px;
  }

  .player-control > .progress {
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

  .player-control > .progress::before {
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

  .player-control > .screen > :global(img) {
    display: none;
  }

  .player-control > .screen.-fullscreen > :global(.exitFulllscreen) {
    display: block;
  }

  .player-control > .screen.-noFullscreen > :global(.fullscreen) {
    display: block;
  }
</style>

<ul
  class="player-control"
  on:click|stopPropagation
  on:animationstart={disableActiveControl}>
  <li class={`playAndStop ${paused ? '-play' : '-pause'}`} on:click={play}>
    <IconCollab className="play" name="play_arrow" alt="Inciar Vídeo" />
    <IconCollab className="pause" name="pause" alt="Pausar vídeo" />
  </li>
  <li class="time overline">{elapsedTime}</li>
  <li
    class="progress"
    style={`--progress: ${progress}`}
    on:click={setElapsedTime} />
  <li class="time overline">{duration}</li>
  <li
    class={`screen ${fullscreen ? '-fullscreen' : '-noFullscreen'}`}
    on:click={changeOrientation}>
    <IconCollab
      className="fullscreen"
      name="fullscreen"
      alt="Vídeo em tela cheia" />
    <IconCollab
      className="exitFulllscreen"
      name="fullscreen_exit"
      alt="Sair da tela cheia" />
  </li>
  <li class="more" on:click={showMore}>
    <IconCollab
      className="more_vert"
      name="more_vert"
      alt="Mais informações do vídeo13" />
  </li>
</ul>
