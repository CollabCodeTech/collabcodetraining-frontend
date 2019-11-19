<script>
  import FieldCollab from '../components/FieldCollab.svelte'
  import ButtonCollab from '../components/ButtonCollab.svelte'
  import WarningLabel from '../components/WarningLabel.svelte'

  let user = {}

  function updateUser(name, value) {
    user = { ...user, [name]: value }
  }
</script>

<style>
  .form-reset {
    text-align: left;
  }

  .form-reset > :global(.warning-label) {
    margin-bottom: var(--gap-biggest);
  }

  .form-reset > :global(.field-collab) {
    margin-bottom: var(--gap-big);
  }

  .form-reset :global(.input-collab) {
    margin-bottom: var(--gap-smallest);
  }
</style>

<form class="form-reset" on:submit|preventDefault>

  <WarningLabel content="Informe seu e-mail para resetar a sua senha" />

  <FieldCollab
    content="E-mail:"
    id="email"
    type="email"
    name="email"
    placeholder="example@gmail.com"
    required
    onInput={updateUser} />

  <ButtonCollab content="Resetar" />

</form>
