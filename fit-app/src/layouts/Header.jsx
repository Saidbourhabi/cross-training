import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'
import {FaTimes } from 'react-icons/fa'
import { FaGripLines } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const clubLocations = [
  { name: 'Maarif', slug: 'maarif' },
  { name: 'Bouskoura', slug: 'bouskoura' },
  { name: 'Ain Sebaa', slug: 'ain-sebaa' },
]

export default function Header() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Events', href: '/events' },
    { name: 'About', href: '/about' },
    { name: 'Clubs', href: '/club' }, //  * main Clubs link kept for fallback
  ]

  return (
    <Disclosure
      as="nav"
      className="relative bg-[#F0DE36] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-black"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-12">
        <div className="relative flex h-18 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group cursor-pointer relative inline-flex items-center justify-center p-2 text-black hover:bg-black/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b23ff]">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <FaGripLines aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <FaTimes aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          {/* Logo + desktop navigation */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link to="/" className="flex">
              <img alt="logo" src="/logo.svg" className="w-10" />
            </Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => {
                  // Clubs dropdown in desktop
                  if (item.name === 'Clubs') {
                    return (
                      <Menu as="div" key="clubs" className="relative">
                        <MenuButton
                          className={({ active }) =>
                            classNames(
                              active ? 'bg-white text-black' : 'text-black hover:bg-white',
                              'px-3 py-2 text-sm font-medium cursor-pointer',
                            )
                          }
                        >
                          Clubs
                        </MenuButton>
                        <Transition
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <MenuItems className="absolute  right-0 z-10 mt-2 w-48 origin-top-right bg-white shadow-lg ring-1 ring-black/5 focus:outline-none cursor-pointer">
                            {clubLocations.map((club) => (
                              <MenuItem key={club.slug}>
                                {({ active }) => (
                                  <Link
                                    to={`/club/${club.slug}`}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-black',
                                    )}
                                  >
                                    {club.name}
                                  </Link>
                                )}
                              </MenuItem>
                            ))}
                          </MenuItems>
                        </Transition>
                      </Menu>
                    )
                  }

                  // Regular navigation links
                  return (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      end
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? 'bg-white text-black'
                            : 'text-black hover:bg-white',
                            ' px-3 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b23ff]',
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Search icon (replacing old user icon) */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              aria-label="Search"
              className="relative p-1 text-black cursor-pointer"
            >
              <span className="absolute -inset-1.5" />
              <FiSearch aria-hidden="true" className="size-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => {
            if (item.name === 'Clubs') {
              // Mobile clubs dropdown (using nested Disclosure for simplicity)
              return (
                <Disclosure key="clubs-mobile" as="div">
                  {({ open }) => (
                    <>
                      <DisclosureButton
                        className={classNames(
                          'flex w-full items-center justify-between px-3 py-2 text-base font-medium text-black hover:bg-white/20',
                        )}
                      >
                        Clubs
                        <IoMdArrowDropdown 
                          className={classNames(
                            'ml-2 h-5 w-5 transition-transform',
                            open ? 'rotate-180' : '',
                          )}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="space-y-1 px-4 pb-2">
                        {clubLocations.map((club) => (
                          <DisclosureButton
                            key={club.slug}
                            as={Link}
                            to={`/club/${club.slug}`}
                            className="block px-3 py-2 text-sm font-medium text-black hover:text-[#F0DE36] hover:bg-black"
                          >
                            {club.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              )
            }

            return (
              <DisclosureButton
                key={item.name}
                as={NavLink}
                to={item.href}
                end
                className={({ isActive }) =>
                  classNames(
                    isActive ? 'bg-black/80 text-white' : 'text-black hover:bg-white/20',
                    'block px-3 py-2 text-base font-medium',
                  )
                }
              >
                {item.name}
              </DisclosureButton>
            )
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}