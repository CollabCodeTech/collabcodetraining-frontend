<script>
  import LabelCollab from './LabelCollab.svelte'
  import InputCollab from './InputCollab.svelte'
  import ErrorCollab from '../components/ErrorCollab.svelte'

  export let content = 'No content'
  export let id = 'No id'
  export let type = 'text'
  export let name = 'No name'
  export let placeholder = 'No placeholder'
</script>

<style>
  .field-collab {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .field-collab > :global(.eye) {
    position: absolute;
    right: 0;
    top: 22px;
  }
</style>

<div class="field-collab">
  <LabelCollab className="field-collab" forName={id} {content} />
  <InputCollab {id} {type} {name} {placeholder} />

  <ErrorCollab content="mínimo de 8 caracteres" />
</div>
