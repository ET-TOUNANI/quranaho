<template>
  <ul
    v-if="true"
    class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-96 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
    tabindex="-1"
    role="listbox"
    aria-labelledby="listbox-label"
    aria-activedescendant="listbox-option-3"
  >
    <li
      v-for="i in 23"
      :key="i"
      class="text-gray-900 cursor-default select-none relative py-5 border-b pl-3 pr-9"
      id="listbox-option-0"
      role="option"
    >
      <div class="flex items-center">
        <img
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          class="flex-shrink-0 h-6 w-6 rounded-full"
        />
        <span class="font-normal ml-3 block truncate">
          Wade Cooper
        </span>
      </div>

      <span
        class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"
      >
        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style></style>
