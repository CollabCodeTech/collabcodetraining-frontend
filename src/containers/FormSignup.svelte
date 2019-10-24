<script>
  import UserService from '../services/user.service'

  import FieldCollab from '../components/FieldCollab.svelte'
  import ButtonCollab from '../components/ButtonCollab.svelte'

  let user = {
    name: '',
    email: '',
    password: '',
  }

  function updateUser({ target: { name, value } }) {
    user = { ...user, [name]: value }
  }

  function saveUser() {
    UserService.save(user)
  }
</script>

<style>
  .form-signup {
    text-align: left;
  }

  .form-signup > :global(.field-collab) {
    margin-bottom: var(--gap-big);
  }

  .form-signup :global(.input-collab) {
    margin-bottom: var(--gap-smallest);
  }
</style>

<form class="form-signup" on:submit|preventDefault={saveUser}>

  <FieldCollab
    content="Nome:"
    id="name"
    type="text"
    name="name"
    placeholder="Seu nome"
    required
    minlength="2"
    pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+"
    onInput={updateUser} />

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

  <ButtonCollab content="Enviar" />
</form>
