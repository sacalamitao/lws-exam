import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

export default function Nav() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex items-center justify-between gap-x-8 lg:mx-0">
        <div className="flex items-center gap-x-6">
            <p className='header-title'>AnimeBinge</p>
        </div>
        <div className="flex items-center gap-x-4 sm:gap-x-6">
          <button type="button" className="hidden text-sm font-semibold leading-6 text-white sm:block">
            Home
          </button>
          <button type="button" className="hidden text-sm font-semibold leading-6 text-white sm:block">
            Discover
          </button>
          <a href="#" className="hidden text-sm font-semibold leading-6 text-white sm:block">
            About Us
          </a>
          <a 
            href="/register"
            class="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
            Sign Up
          </a>
          <a
            href="/login"
            class="bg-indigo-600 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded"
          >
            Log In
          </a>

          <Menu as="div" className="relative sm:hidden">
            <MenuButton className="-m-3 block p-3">
              <span className="sr-only">More</span>
              <EllipsisVerticalIcon aria-hidden="true" className="h-5 w-5 text-gray-500" />
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <MenuItem>
                <button
                  type="button"
                  className="block w-full px-3 py-1 text-left text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                >
                  Home
                </button>
              </MenuItem>
              <MenuItem>
                <a href="#" className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50">
                  Discover
                </a>
              </MenuItem>
              <MenuItem>
                <button
                  type="button"
                  className="block w-full px-3 py-1 text-left text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                >
                  About Us
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  )
}
