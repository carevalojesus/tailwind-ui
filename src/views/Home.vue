<template>
  <div class="w-full">
    <div class="grid grid-cols-6 min-h-screen">
      <div class="col-span-2 bg-white p-16">
        <img class="h-20 w-auto" src="/src/assets/logo-epg.svg" alt="logo-epg">
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900 uppercase">Gestión Económica</h2>
        <label for="email" class="block text-sm font-medium text-gray-700">Correo Electrónico</label>
        <input type="text" name="first-name" id="email" autocomplete="given-name"
               class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">

        <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
        <input type="password" name="first-name" id="password" autocomplete="given-name"
               class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        <div class="text-sm">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> ¿Olvidaste tu contraseña? </a>
        </div>

        <div>
          <button type="submit"
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <!-- Heroicon name: solid/lock-closed -->
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"/>
            </svg>
          </span>
            Iniciar Sesión
          </button>
        </div>
      </div>
      <div class="col-span-4 overflow-hidden hidden md:block">
        <img class="w-full h-full object-cover" src="/src/assets/login/economico-wp.jpg" alt="">
      </div>
    </div>
  </div>
</template>