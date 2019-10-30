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

  <WarningLabel content="Você precisa confirmar o e-mail antes de efetuar o login. Verifique o e-mail que te enviamos para finalizar o seu cadastro." />

  <FieldCollab
    content="Não recebeu o e-mail?"
    id="email"
    type="email"
    name="email"
    placeholder="gueio@collabcode.tech"
    required
    onInput={updateUser} />

  <ButtonCollab content="Reenviar" />

</form>
