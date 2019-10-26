<script>
  import FieldCollab from '../components/FieldCollab.svelte'
  import ButtonCollab from '../components/ButtonCollab.svelte'
  import WarningLabel from '../components/WarningLabel.svelte'

  let user = {}

  function updateUser({ target: { name, value } }) {
    user = { ...user, [name]: value }
  }
</script>

<style>
  .form-login {
    text-align: left;
  }

  .form-login > :global(.field-collab) {
    margin-bottom: var(--gap-big);
  }

  .form-login > :global(.warning-label) {
    margin-bottom: var(--gap-big);
  }

  .form-login :global(.input-collab) {
    margin-bottom: var(--gap-smallest);
  }
</style>

<form class="form-login" on:submit|preventDefault>

  <WarningLabel content="Informe seu e-mail para resetar a sua senha" />

  <FieldCollab
    content="Email:"
    id="email"
    type="email"
    name="email"
    placeholder="example@gmail.com"
    required
    onInput={updateUser} />

  <ButtonCollab content="Resetar" />

</form>
