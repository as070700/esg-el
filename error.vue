<template>
  <div class="error-page">
    <div class="content">
      <h1>{{ error.statusCode }}</h1>
      <p>
        {{ error.statusCode === 404
          ? 'Seite nicht gefunden 😕'
          : error.message || 'Etwas ist schiefgelaufen 😢' }}
      </p>
      <NuxtLink to="/" class="btn">Zur Startseite</NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  error: Object
})
</script>

<style scoped>
.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f5f5f5;
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}

.content h1 {
  font-size: 6rem;
  margin: 0;
  color: #333;
}

.content p {
  font-size: 1.5rem;
  margin: 20px 0;
  color: #666;
}

.btn {
  padding: 12px 25px;
  background-color: #4f46e5;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  transition: 0.3s;
}

.btn:hover {
  background-color: #3730a3;
}
</style>