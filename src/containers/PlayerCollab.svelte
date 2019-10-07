<script>
  import { onMount } from 'svelte'
  import PlayerControl from '../components/PlayerControl.svelte'
  import PlayerMore from '../components/PlayerMore.svelte'

  let video
  let paused = true
  let fullscreen = false
  let clicked = false
  let activeMore = false
  let time = 0
  let playbackRate = 2
  let duration
  let orientation = 'portrait'
  $: progress = (time / duration).toFixed(5)

  onMount(() => {
    console.log(video)
  })

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
    fullscreen = !fullscreen
  }

  function setElapsedTime(event) {
    paused = true

    requestAnimationFrame(() => {
      const { clientX } = event
      const { x, width } = this.getBoundingClientRect()
      const positionMouseXInClick = clientX - x

      progress = positionMouseXInClick / width
      time = progress * duration
      paused = false
    })
  }
  13
  function disableActiveControl() {
    activeControl = false
  }

  function setActiveControl() {
    activeControl = true
  }

  function showMore() {
    activeMore = true
  }

  function hideMore() {
    activeMore = false
  }
</script>

<style>
  .wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
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

  .wrapper > :global(.player-control) {
    --height: 30px;

    position: absolute;
    bottom: var(--gap-normal);
    width: calc(100% - var(--gap-small) * 2);
    height: var(--height);
    border-radius: calc(var(--height) / 3);
    opacity: 0;
    transform: translateY(140%);

    transition: opacity 100ms linear, transform 200ms linear;
  }

  .wrapper:hover > :global(.player-control),
  .wrapper:focus > :global(.player-control) {
    transform: translateY(0);
    opacity: 1;
    transition: opacity 400ms linear, transform 200ms linear;
  }

  .wrapper > :global(.player-more) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transform: translateY(100%);
  }

  .wrapper > :global(.player-more.-active) {
    transform: translateY(0);
  }

  .wrapper.landscape > :global(.player-more),
  .wrapper.landscape :global(.options) {
    width: 100vh;
  }

  @media (orientation: landscape) {
    .wrapper.landscape > :global(.player-more),
    .wrapper.landscape :global(.options) {
      width: 100vw;
    }
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
  class={`wrapper 
    ${orientation} 
    ${clicked && (paused ? '-pause' : '-play')}
  `}
  on:click={play}>
  <video
    class="player-collab"
    poster="http://sveltejs.github.io/assets/caminandes-llamigos.jpg"
    src="http://sveltejs.github.io/assets/caminandes-llamigos.mp4"
    bind:paused
    bind:this={video}
    bind:currentTime={time}
    bind:duration
    bind:playbackRate>
    Por favor, atualize seu navegador!!!
  </video>

  <PlayerControl
    {showMore}
    {disableActiveControl}
    {paused}
    {play}
    {fullscreen}
    {changeOrientation}
    {setElapsedTime}
    elapsedTime={format(time)}
    duration={format(duration)}
    {progress} />

  <PlayerMore active={activeMore} hide={hideMore} />
</div>
