<script>
  export let type = 'default'

  let types = []
  types['default'] = 'logo-sinup-login.svg'
  types['header-mobile'] = 'logo-mobile.svg'
</script>

<img
  class="logo-collab"
  src={`img/dark/${types[type]}`}
  alt="Logo da CollabCode" />
