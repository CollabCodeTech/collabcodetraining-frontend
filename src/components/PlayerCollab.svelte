<script>
  import { afterUpdate } from 'svelte'
  import ControlCollab from './ControlCollab.svelte'

  let video
  let paused = true
  let clicked = false
  let time = 0
  let duration
  let orientation = 'portrait'
  $: progress = (time / duration).toFixed(5)

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

  function format(seconds) {
    if (isNaN(seconds)) return '...'

    let minutes = Math.floor(seconds / 60)
    if (minutes < 10) minutes = '0' + minutes
    seconds = Math.floor(seconds % 60)
    if (seconds < 10) seconds = '0' + seconds

    return `${minutes}:${seconds}`
  }

  function changeOrientation() {
    orientation = orientation === 'portrait' ? 'landscape' : 'portrait'
  }

  function setElapsedTime(event) {
    const { clientX } = event
    const { x, width } = this.getBoundingClientRect()
    const positionMouseXInClick = clientX - x
    paused = true
    progress = positionMouseXInClick / width
    time = progress * duration
    paused = false

    console.log('positionMouseXInClick', positionMouseXInClick)
    console.log('width', width)
  }
</script>

<style>
  .wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wrapper.landscape {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vh;
    height: 100vw;
    transform-origin: left top;
    transform: rotate(90deg) translateY(-100%);
    z-index: 1;
  }
  @media (orientation: landscape) {
    .wrapper.landscape {
      transform: rotate(0) translateY(0);
      width: 100vw;
      height: 100vh;
    }
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
    opacity: 0;
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
  class={`wrapper ${orientation} ${clicked && (paused ? '-pause' : '-play')}`}
  on:click={play}>
  <video
    class="player-collab"
    poster="http://sveltejs.github.io/assets/caminandes-llamigos.jpg"
    src="http://sveltejs.github.io/assets/caminandes-llamigos.mp4"
    bind:paused
    bind:this={video}
    bind:currentTime={time}
    bind:duration>
    Por favor, atualize seu navegador!!!
  </video>

  <ControlCollab
    {paused}
    onClick={play}
    {changeOrientation}
    {setElapsedTime}
    elapsedTime={format(time)}
    duration={format(duration)}
    {progress} />
</div>
