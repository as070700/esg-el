// ----------------------------
// Datei: components/Navigation.vue
// ----------------------------
<template>
  <nav>
    <NuxtLink to="/"><img src="/esg_logo.jpg" alt="ESG Logo" class="logo"></NuxtLink> <p>|</p>
    <NuxtLink to="/index">Start</NuxtLink> <p>|</p>
    <NuxtLink to="/booking">Termin buchen</NuxtLink> <p>|</p>
    <NuxtLink to="/contact">Kontakt</NuxtLink>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  height: 130%;
  padding: 1rem;
  background: #82ade2;
  text-align: center;
}
nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #fff;
}
nav a:hover {
  text-decoration: underline;
}

nav p {
  display: inline;
  color: #fff;
  margin: 0 0.5rem;
}

.logo {
  width: 100px;
  height: auto;
  display: inline-block;
  vertical-align: middle;
}

.logo:hover {
  transform: scale(1.1);
  transition: transform 1s ease;
}
</style>

