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
  .form-confirmation {
    text-align: left;
  }

  .form-confirmation > :global(.warning-label) {
    margin-bottom: var(--gap-biggest);
  }

  .form-confirmation > :global(.field-collab) {
    margin-bottom: var(--gap-big);
  }

  .form-confirmation :global(.input-collab) {
    margin-bottom: var(--gap-smallest);
  }
</style>

<form class="form-confirmation" on:submit|preventDefault>

  <WarningLabel
    content="Enviamos um email para você confirmar sua conta. Entre no seu email
    e clique no link para poder efetuar o login." />

  <FieldCollab
    content="Não recebeu o e-mail?"
    id="email"
    type="email"
    name="email"
    placeholder="seu.email@gmail.com"
    required
    onInput={updateUser} />

  <ButtonCollab content="Reenviar" />

</form>
