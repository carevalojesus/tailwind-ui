<template>
  <div class="w-full">
    <div class="grid grid-cols-6 min-h-screen">
      <!-- Parte izquierda de la App -->
      <div class="col-span-6 flex justify-center items-center flex-col md:col-span-3 lg:col-span-2">
        <div class="absolute top-0 -z-50 overflow-hidden">
          <img class="object-cover object-center min-h-screen" src="/src/assets/login/background.jpg" alt="background">
        </div>
        <div class="w-full px-16">
          <!-- Titulo de la APP -->
          <div>
            <h2 class="title-app">Gestión Económica</h2>
            <p class="pt-2 font-medium text-lg">Oficina de Asuntos Económicos</p>
          </div>
          <!-- formulario del login -->
          <form class="mt-10 space-y-6">
            <div>
              <label for="username" class="form-label">Usuario o correo electrónico</label>
              <input class="form-input" id='username' type="text" placeholder="@postgradounap.edu.pe">
            </div>
            <div>
              <label for="password" class="form-label">Contraseña</label>
              <input class="form-input" id='password' type="password">
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox"
                       class="h-4 w-4 text-info-900 focus:ring-info-500 border-gray-300 rounded-none">
                <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Recordar</label>
              </div>

              <div class="text-sm">
                <router-link to="/forgot-password" class="font-medium text-info-900 hover:text-info-500">¿Olvidaste tu contraseña?</router-link><a href="/forgot-password" class=""> </a>
              </div>
            </div>

            <div>
              <button
                  type="submit"
                  class="btn btn-info">
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
        <p class="text-sm text-info-900 px-16 mt-10 absolute bottom-0 text-center md:static">© Escuela de Postgrado UNAP - 2022. <br>Todos los derechos reservados.</p>
      </div>
      <!-- Parte derecha de la App -->
      <div class="hidden col-span-3 md:block lg:col-span-4 overflow-hidden min-h-screen">
        <img class="object-cover min-h-screen object-center" src="/src/assets/login/economico-wp-2.jpg" alt="economicos">
      </div>
    </div>

  </div>
</template>
