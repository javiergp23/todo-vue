<script>
export default {
    name: 'NavbarComponent'
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand ml-2" href="#">ToDo App</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link active" aria-current="page">Login</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/register" class="nav-link">Register</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
</template>