<script>
  import { onMount } from 'svelte'

  export let id = 'No id'
  export let type = 'text'
  export let name = 'No name'
  export let placeholder = 'No placeholder'
  export let required = false
  export let onInvalid
  export let onInput
  export let minlength = 0
  export let maxlength = ''
  export let pattern = '.*'
  export let update

  let inputCollab

  onMount(() => {
    const name = inputCollab.name
    const value = inputCollab.value

    update(name, value)
  })

  function togglePassword() {
    type = type === 'password' ? 'text' : 'password'
    inputCollab.focus()
  }
</script>

<style>
  .input-collab {
    color: var(--color-fiery-rose);
    font-size: var(--size-smallest);
    letter-spacing: 0.15px;
    background-color: transparent;
    padding-bottom: var(--gap-normal);
    border-bottom: 1px solid var(--color-floral-white);
    transition: 200ms border linear;
  }

  .input-collab + .eye {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .input-collab + .eye::after {
    --height: 4px;

    content: '';
    background-color: var(--color-purple-navy);
    position: absolute;
    width: 40px;
    height: var(--height);
    border-radius: calc(var(--height) / 2);
    border: 1px solid var(--color-eggshell);
    transform: rotate(-45deg) scaleX(0);
    transition: transform 100ms linear;
  }

  .input-collab + .eye.-hide:after {
    transform: rotate(-45deg) scaleX(1);
  }

  .input-collab:invalid {
    outline: none;
    box-shadow: none;
  }

  .input-collab:focus {
    outline: none;
    border-bottom-color: var(--color-fiery-rose) !important;
  }
</style>

<input
  {id}
  class="input-collab"
  {type}
  {name}
  {placeholder}
  {required}
  {minlength}
  {maxlength}
  {pattern}
  on:invalid={onInvalid}
  on:input={onInput}
  bind:this={inputCollab} />

{#if name === 'password'}
  <label
    class={`eye ${type === 'password' && '-hide'}`}
    on:click={togglePassword}>
    <img src="/img/dark/icon/visibility.svg" alt="Ícone de um olho" />
  </label>
{/if}
