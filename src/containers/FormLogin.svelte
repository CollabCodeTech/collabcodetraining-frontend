<script>
  import UserService from '../services/user.service'
  import FieldCollab from '../components/FieldCollab.svelte'
  import ButtonCollab from '../components/ButtonCollab.svelte'

  let user = {}

  function updateUser({ target: { name, value } }) {
    user = { ...user, [name]: value }
  }

  async function login() {
    const token = await UserService.login(user)
  }
</script>

<style>
  .form-login {
    text-align: left;
  }

  .form-login > :global(.field-collab) {
    margin-bottom: var(--gap-big);
  }

  .form-login :global(.input-collab) {
    margin-bottom: var(--gap-smallest);
  }
</style>

<form class="form-login" on:submit|preventDefault={login}>
  <FieldCollab
    content="Email:"
    id="email"
    type="email"
    name="email"
    placeholder="example@gmail.com"
    required
    onInput={updateUser} />

  <FieldCollab
    content="Senha:"
    id="password"
    type="password"
    name="password"
    placeholder="********"
    required
    minlength="8"
    onInput={updateUser} />

  <ButtonCollab content="Entrar" />

</form>
