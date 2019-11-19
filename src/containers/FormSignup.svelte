<script>
  import { goto } from '@sapper/app'
  import UserService from '../services/user.service'
  import FieldCollab from '../components/FieldCollab.svelte'
  import ButtonCollab from '../components/ButtonCollab.svelte'

  let user = {
    name: '',
    email: '',
    password: '',
  }

  let msgError = { name: '', email: '', password: '' }

  function updateUser(name, value) {
    user = { ...user, [name]: value }
  }

  async function saveUser() {
    const { status, data } = await UserService.save(user)

    if (status === 201) {
      goto('confirmation')
    } else {
      const { field, error } = data[0]
      msgError = { [field]: error }
    }
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
    messageError={msgError.name}
    invalid={!!msgError.name}
    pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+"
    onInput={updateUser} />

  <FieldCollab
    content="Email:"
    id="email"
    type="email"
    name="email"
    placeholder="example@gmail.com"
    messageError={msgError.email}
    invalid={!!msgError.email}
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
    messageError={msgError.password}
    invalid={!!msgError.password}
    onInput={updateUser} />

  <ButtonCollab content="Enviar" />
</form>
