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
            <div class="mt-5">
              <h3 class="font-medium">Restablecer la contraseña</h3>
              <p class="text-sm pt-5 ">Introduzca su dirección de correo electrónico registrada para recibir el enlace de restablecimiento de contraseña</p>
            </div>
          </div>
          <!-- formulario del login -->
          <form class="mt-10 space-y-6">
            <div>
              <label for="username" class="form-label">Correo electrónico</label>
              <input class="form-input" id='username' type="text" placeholder="@postgradounap.edu.pe">
            </div>
            <div class="flex items-center justify-between">

              <div class="text-sm">
                <router-link to="/login" class="font-medium text-info-900 hover:text-info-500">
                  Regresa para iniciar sesión
                </router-link>
              </div>
            </div>

            <div>
              <button
                  type="submit"
                  class="btn btn-info">
                Enviar
              </button>
            </div>
          </form>
        </div>
        <p class="text-sm text-info-900 px-16  mt-10 absolute bottom-0 text-center md:static">© Escuela de Postgrado UNAP - 2022. <br>Todos los derechos reservados.</p>
      </div>
      <!-- Parte derecha de la App -->
      <div class="hidden col-span-3 md:block lg:col-span-4 overflow-hidden min-h-screen">
        <img class="object-cover min-h-screen object-center" src="/src/assets/login/economico-wp-2.jpg" alt="economicos">
      </div>
    </div>

  </div>
</template>
