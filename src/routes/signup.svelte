<script>
  import LogoCollab from '../components/LogoCollab.svelte'
  import TitleCollab from '../components/TitleCollab.svelte'
  import ButtonCollab from '../components/ButtonCollab.svelte'
  import LabelCollab from '../components/LabelCollab.svelte'
  import InputCollab from '../components/InputCollab.svelte'
</script>

<style>

</style>

<LogoCollab />

<TitleCollab content="Cadastro" uppercase />

<LabelCollab content="Nome:" />
<InputCollab type="text" name="name" placeholder="Seu nome" />

<LabelCollab content="Email:" />
<InputCollab type="email" name="email" placeholder="example@gmail.com" />

<LabelCollab content="Senha:" />
<InputCollab type="password" name="password" placeholder="********" />

<ButtonCollab label="Enviar" />
