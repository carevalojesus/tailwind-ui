<template>
  <div class="w-full">
    <div class="grid grid-cols-12 grid-rows-board grid-rows- min-h-screen">
      <div class="w-full px-6 col-span-12 bg-white shadow flex items-center justify-end">
        <Menu as="div" class="relative inline-block text-left">
          <MenuButton class="uppercase inline-flex justify-center w-full px-4 py-2 text-xs text-gray-700">
            Christian Arévalo Jesús
            <ChevronDownIcon
                class="w-4 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
            />
          </MenuButton>
          <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
          >
          <MenuItems class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-none shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="px-1 py-1">
              <MenuItem v-slot="{active}">
                <a href=""
                   :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex rounded-none items-center w-full px-2 py-2 text-sm',
                ]">
                  Perfil
                </a>
              </MenuItem>
            </div>
          </MenuItems>
          </transition>
        </Menu>
        <a href="#"><CogIcon class="w-6 text-gray-900 mr-2 stroke-1"></CogIcon></a>
        <a href="#"><QuestionMarkCircleIcon class="w-6 text-gray-900 mr-2 stroke-1"></QuestionMarkCircleIcon></a>
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
      <nav class="col-span-2 bg-primary py-6">
        <!--menu items-->
        <router-link :active-class="'bg-gray-700 font-medium hover:bg-gray-700'" to="/inicio" class="inline-flex items-center px-10 py-4 hover:bg-info-900 hover:font-medium w-full text-white text-sm">
          <HomeIcon class="w-6 stroke-white stroke-1 mr-3"></HomeIcon>
          Panel de Control
        </router-link>
        <Disclosure>
          <DisclosureButton class="inline-flex justify-between items-center px-10 py-4 hover:bg-info-900 hover:font-medium w-full text-white text-sm">
            <div class="flex items-center">
              <CogIcon class="w-6 stroke-white stroke-1 mr-3"></CogIcon>
              Gestión
            </div>
            <ChevronRightIcon class="w-4"></ChevronRightIcon>
          </DisclosureButton>
          <DisclosurePanel class="text-white">
            <router-link :active-class="'bg-gray-700 font-medium hover:bg-gray-700'" to="/conceptos" class="inline-flex items-center px-10 py-4 pl-20 hover:bg-info-900 hover:font-medium w-full text-white text-sm">
              <ReceiptTaxIcon class="w-6 stroke-white stroke-1 mr-3"></ReceiptTaxIcon>
              Conceptos
            </router-link>
          </DisclosurePanel>
        </Disclosure>
        <router-link :active-class="'bg-gray-700 font-medium hover:bg-gray-700'" to="/pagos" class="inline-flex items-center px-10 py-4 hover:bg-info-900 hover:font-medium w-full text-white text-sm">
          <CloudUploadIcon class="w-6 stroke-white stroke-1 mr-3"></CloudUploadIcon>
          Importar pagos
        </router-link>
        <router-link :active-class="'bg-gray-700 font-medium hover:bg-gray-700'" to="/pagos" class="inline-flex items-center px-10 py-4 hover:bg-info-900 hover:font-medium w-full text-white text-sm">
          <DocumentAddIcon class="w-6 stroke-white stroke-1 mr-3"></DocumentAddIcon>
          Asignar Pagos
        </router-link>
        <router-link :active-class="'bg-gray-700 font-medium hover:bg-gray-700'" to="/pagos" class="inline-flex items-center px-10 py-4 hover:bg-info-900 hover:font-medium w-full text-white text-sm">
          <DocumentSearchIcon class="w-6 stroke-white stroke-1 mr-3"></DocumentSearchIcon>
          Estado Pagos
        </router-link>
        <Disclosure>
          <DisclosureButton class="inline-flex justify-between items-center px-10 py-4 hover:bg-info-900 hover:font-medium w-full text-white text-sm">
            <div class="flex items-center">
              <DocumentReportIcon class="w-6 stroke-white stroke-1 mr-3"></DocumentReportIcon>
              Reportes
            </div>
            <ChevronRightIcon class="w-4"></ChevronRightIcon>
          </DisclosureButton>
          <DisclosurePanel class="text-white">
            <router-link :active-class="'bg-gray-700 font-medium hover:bg-gray-700'" to="/conceptos" class="inline-flex items-center px-10 py-4 pl-20 hover:bg-info-900 hover:font-medium w-full text-white text-sm">
              <ReceiptTaxIcon class="w-6 stroke-white stroke-1 mr-3"></ReceiptTaxIcon>
              Conceptos
            </router-link>
          </DisclosurePanel>
        </Disclosure>
      </nav>
      <div class="col-span-10 w-full">
        <div class="">
          <router-view v-slot="{Component, route}">
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Popover, PopoverButton, PopoverPanel, Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuItems, MenuButton, MenuItem } from '@headlessui/vue'
import { QuestionMarkCircleIcon, CogIcon, HomeIcon, ChevronRightIcon, CloudUploadIcon, ReceiptTaxIcon, DocumentAddIcon, DocumentSearchIcon, DocumentReportIcon, ChevronDownIcon  } from '@heroicons/vue/outline'

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    QuestionMarkCircleIcon,
    CloudUploadIcon,
    ChevronRightIcon,
    ChevronDownIcon,
    CogIcon,
    HomeIcon,
    ReceiptTaxIcon,
    DocumentAddIcon,
    DocumentSearchIcon,
    DocumentReportIcon
  },
}
</script>
