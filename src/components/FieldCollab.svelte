<script>
  import LabelCollab from './LabelCollab.svelte'
  import InputCollab from './InputCollab.svelte'
  import ErrorCollab from '../components/ErrorCollab.svelte'

  export let content = 'No content'
  export let id = 'No id'
  export let type = 'text'
  export let name = 'No name'
  export let placeholder = 'No placeholder'
  export let required = false
  export let minlength = ''
  export let maxlength = ''
  export let pattern = '.*'
  export let messageError = ''
  export let invalid = false
  export let onInput

  let defaultMessageError = []
  defaultMessageError['required'] = 'Campo obrigatório'
  defaultMessageError['email'] = 'Por favor, preencha com email válido'
  defaultMessageError['minlength'] = (string, min) =>
    `Use no mínimo ${min} caracteres`
  defaultMessageError['[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+'] =
    'Por favor, use só letras'

  function validation(event) {
    const { type, validity, pattern } = event.target
    const { valueMissing, typeMismatch, tooShort, patternMismatch } = validity

    messageError = valueMissing ? defaultMessageError['required'] : messageError
    messageError = typeMismatch ? defaultMessageError[type] : messageError
    messageError = tooShort
      ? defaultMessageError['minlength']`${minlength}`
      : messageError
    messageError = patternMismatch ? defaultMessageError[pattern] : messageError

    invalid = true

    event.preventDefault()
  }

  function removeMessageError() {
    messageError = ''
    invalid = false
  }
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

  .field-collab.-invalid > :global(.input-collab) {
    border-bottom-color: var(--color-sandstorm);
  }

  .field-collab > :global(.error-collab) {
    position: absolute;
    bottom: 0;
    transform-origin: top;
    transform: scaleY(0) translateY(100%);
    transition: transform 200ms cubic-bezier(0.51, 0.74, 0.92, 1.47),
      opacity 300ms linear;
    opacity: 0;
  }

  .field-collab.-invalid > :global(.error-collab) {
    transform: scaleY(1) translateY(100%);
    opacity: 1;
  }
</style>

<div class={`field-collab ${invalid && '-invalid'}`}>
  <LabelCollab forName={id} {content} />
  <InputCollab
    {id}
    {type}
    {name}
    {placeholder}
    {required}
    {minlength}
    {maxlength}
    {pattern}
    update={onInput}
    onInvalid={validation}
    onInput={({ target: { name, value } }) => {
      removeMessageError()
      onInput(name, value)
    }} />

  <ErrorCollab content={messageError} />
</div>
