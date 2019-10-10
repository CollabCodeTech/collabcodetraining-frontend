<script>
  import IconCollab from './IconCollab.svelte'

  export let active = false
  export let activeMain = false
  export let hide
  export let activeSpeed = false
  export let showSpeed
  export let changePlaybackRate
  let currentSpeed = '1.0'
  let speeds = ['0.25', '0.50', '0.75', '1.0', '1.25', '1.50', '1.75', '2.0']
  let quality = '720p'

  function updateSpeed(speed) {
    changePlaybackRate(speed)
    currentSpeed = speed
  }
</script>

<style>
  .player-more {
    position: relative;
    background-color: transparent;

    transition: background-color 100ms linear;
    z-index: 100;
  }
  .player-more.-active {
    background-color: var(--color-arsenic-light);
  }

  .player-more > .options {
    --size-shadow: 5px;
    --translateY: translateY(calc(var(--size-shadow) + 100% + 4px));

    position: absolute;
    box-sizing: border-box;
    bottom: 0;
    width: 100vw;
    background-color: var(--color-eggshell);
    padding-top: var(--gap-normal);
    padding-bottom: var(--gap-normal);
    box-shadow: 0px calc(var(--size-shadow) * -1) 5px var(--color-arsenic);
    transform: translateY(calc(var(--size-shadow) + 100% + 4px));

    transition: transform 150ms linear;
  }

  .player-more > .options.-main.-active {
    transform: translateY(0);
  }

  .player-more .item {
    display: flex;
    align-items: center;
    padding: var(--gap-normal) var(--gap-small);
    cursor: pointer;
  }

  .player-more .item:hover,
  .player-more .item:focus {
    background-color: var(--color-bisque);
  }

  .player-more .label {
    display: flex;
    align-items: center;
    transition: transform 50ms linear;
  }

  .player-more .item:hover > .label,
  .player-more .item:focus > .label {
    transform: translateX(5px);
  }

  .player-more :global(.icon) {
    margin-right: var(--gap-smallest);
  }

  .player-more .info {
    margin-left: auto;
  }

  .player-more > .options.-speeds {
    transform: var(--translateY);
    transition: transform 100ms 100ms linear;
  }

  .player-more > .options.-speeds.-active {
    transform: translate(0);
  }
</style>

<menu
  class={`player-more ${active && '-active'}`}
  on:click|stopPropagation={hide}>
  <ul class={`options -main ${activeMain && '-active'}`}>
    <li class="item" on:click|stopPropagation={showSpeed}>
      <figure class="label">
        <IconCollab
          className="icon"
          name="slow_motion_video"
          alt="Alterar velocidade do vídeo" />
        <figcaption>Velocidade</figcaption>
      </figure>
      <span class="info">
        {currentSpeed === '1.0' ? 'Normal' : currentSpeed}
      </span>
    </li>
    <li class="item">
      <figure class="label">
        <IconCollab
          className="icon"
          name="settings"
          alt="Alterar qualidade do vídeo" />
        <figcaption>Qualidade</figcaption>
      </figure>
      <span class="info">{quality}</span>
    </li>
  </ul>

  <ul class="options -speeds {activeSpeed && '-active'}">
    {#each speeds as speed}
      <li class="item" on:click={() => updateSpeed(speed)}>
        <figure class="label">
          {#if currentSpeed === speed}
            <IconCollab
              className="icon"
              name="done"
              alt="Velocidade selecionada" />
          {/if}
        </figure>
        <span class="info">{speed === '1.0' ? 'Normal' : speed}</span>
      </li>
    {/each}
  </ul>
</menu>
