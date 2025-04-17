/*
  Tailwind Config Add-on:

  module.exports = {
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
  }
*/

'use client'

import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'

const product = {
  name: 'SuperCool Ceiling Fan',
  price: '₹2,999',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Home Appliances', href: '#' },
    { id: 2, name: 'Fans', href: '#' },
  ],
  images: [
    {
      src: 'https://m.media-amazon.com/images/I/41Yd-gur5iL._AC_UL1080_FMwebp_QL65_.jpg',
      alt: 'Fan front view',
    },
    {
      src: 'https://m.media-amazon.com/images/I/61us6+8XYeL._AC_UY436_FMwebp_QL65_.jpg',
      alt: 'Fan side view',
    },
    {
      src: 'https://m.media-amazon.com/images/I/61CwkCxvECL._AC_UY436_FMwebp_QL65_.jpg',
      alt: 'Fan close up',
    },
    {
      src: 'https://m.media-amazon.com/images/I/51W-vDc-U1L._AC_UL640_FMwebp_QL65_.jpg',
      alt: 'Fan installed on ceiling',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Brown', class: 'bg-amber-900', selectedClass: 'ring-amber-900' },
  ],
  sizes: [],
  description:
    'High-speed energy efficient ceiling fan for modern homes with silent operation and stylish design.',
  highlights: [
    'High-speed motor',
    'Low power consumption',
    'Rust-free blades',
    '2-year warranty',
  ],
  details:
    'Ideal for living rooms and bedrooms. Comes with remote control and 3-speed modes.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetail() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <img
            alt={product.images[0].alt}
            src={product.images[0].src}
            className="hidden w-full rounded-lg object-cover lg:block"
          />
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <img
              alt={product.images[1].alt}
              src={product.images[1].src}
              className="aspect-3/2 w-full rounded-lg object-cover"
            />
            <img
              alt={product.images[2].alt}
              src={product.images[2].src}
              className="aspect-3/2 w-full rounded-lg object-cover"
            />
          </div>
          <img
            alt={product.images[3].alt}
            src={product.images[3].src}
            className="aspect-4/5 w-full object-cover sm:rounded-lg lg:aspect-auto"
          />
        </div>

        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
            <p className="mt-4 text-gray-600">{product.description}</p>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

            <div className="mt-6">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    aria-hidden="true"
                    className={classNames(
                      reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                      'w-5 h-5'
                    )}
                  />
                ))}
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4 flex items-center gap-x-3">
                  {product.colors.map((color) => (
                    <Radio
                      key={color.name}
                      value={color}
                      className={classNames(
                        color.selectedClass,
                        'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-2 ring-transparent focus:outline-none'
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(color.class, 'w-8 h-8 rounded-full border border-black/10')}
                      />
                    </Radio>
                  ))}
                </RadioGroup>
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700"
              >
                Add to Cart
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}