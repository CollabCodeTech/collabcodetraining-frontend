<script>
  import ControlCollab from './ControlCollab.svelte'

  let video
  let paused = true
  let clicked = false

  function play(event) {
    clicked = true

    if (paused) {
      video.play()
      paused = false
    } else {
      video.pause()
      paused = true
    }
  }
</script>

<style>
  .wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wrapper::before {
    --size: 40px;

    content: '';
    position: absolute;
    width: var(--size);
    height: var(--size);
    background-repeat: no-repeat;
    background-size: 100%;
    background-color: var(--color-eggshell-light);
    border-radius: 50%;
    opacity: 0;
  }

  .wrapper.-pause::before {
    background-image: url('/img/dark/icon/pause.svg');
    background-position: center;
    animation: pause 400ms linear;
  }

  .wrapper.-play::before {
    background-image: url('/img/dark/icon/play_arrow.svg');
    background-position: 2px 0;
    animation: play 400ms linear;
  }

  .player-collab {
    width: 100%;
  }

  .wrapper > :global(.control-collab) {
    --height: 30px;

    position: absolute;
    bottom: var(--gap-normal);
    width: calc(100% - var(--gap-small) * 2);
    height: var(--height);
    border-radius: calc(var(--height) / 3);
    margin-left: var(--gap-small);
    margin-right: var(--gap-small);
    opacity: 1;
    transition: opacity 150ms linear;
  }
  .wrapper:hover > :global(.control-collab),
  .wrapper:focus > :global(.control-collab) {
    opacity: 1;
  }

  @keyframes pause {
    from {
      opacity: 1;
      transform: scale(1.4);
    }
    to {
      opacity: 0;
      transform: scale(0);
    }
  }

  @keyframes play {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: scale(2);
    }
  }
</style>

<div
  class={`wrapper ${clicked && (paused ? '-pause' : '-play')}`}
  on:click={play}>
  <video
    class="player-collab"
    src="http://sveltejs.github.io/assets/caminandes-llamigos.mp4"
    bind:paused
    bind:this={video}>
    Por favor, atualize seu navegador!!!
  </video>

  <ControlCollab {paused} onClick={play} />
</div>
