<template>
  <div class="w-full">
    <div class="grid grid-cols-12 grid-rows-board grid-rows- min-h-screen">
      <div class="w-full px-6 col-span-12 bg-white shadow flex items-center justify-end">
        <Popover class="relative">
          <PopoverButton class="uppercase inline-flex w-full p-2 bg-blue-900 rounded-full text-white text-sm font-semibold">
            CA
          </PopoverButton>
          <PopoverPanel class="fixed z-10 w-[400px] right-0 bg-white shadow-xl h-screen mt-2">
            <div class="bg-blue-100 flex justify-center pt-8 flex-col items-center">
              <span class="avatar-user w-10 h-10 p-10 text-4xl">CA</span>
              <h3 class="uppercase text-sm mt-2 font-medium">Christian Arévalo Jesús</h3>
              <div class="space-y-1 text-center">
                <p class="text-xs text-gray-500 font-light">User ID: 1123458</p>
                <p class="text-xs text-gray-500 font-light text-success-900">Administrador</p>
                <p class="text-xs text-gray-500 font-light">carevaloj@postgradounap.edu.pe</p>
              </div>
              <div class="flex text-sm py-4 items-center justify-between w-full px-28">
                <a href="#" class="text-info-900">Mi Perfil</a>
                <span class="inline-block font-light text-gray-500">|</span>
                <a href="#" class="text-danger-900">Cerrar Sesión</a>
              </div>
            </div>
          </PopoverPanel>
        </Popover>
      </div>
      <div class="col-span-2 bg-primary"></div>
    </div>
  </div>
</template>
<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel
  },
}
</script>
