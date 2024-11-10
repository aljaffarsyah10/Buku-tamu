"use client";

import { GuestField } from "@/app/lib/definitions";
import Link from "next/link";
import * as icon from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button";
import { createInvoice, State } from "@/app/lib/actions";
import { useActionState } from "react";

export default function Form({ guests }: { guests: GuestField[] }) {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createInvoice, initialState);

  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <label htmlFor="guest" className="mb-2 block text-m font-medium">
          Personal Information
        </label>
        {/* Guest Name */}
        <div className="mb-4">
          <label htmlFor="guest" className="mb-2 block text-sm font-medium">
            Input Name
          </label>
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Input name"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="name-error"
            />
            <icon.UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>

          <div id="guest-error" aria-live="polite" aria-atomic="true">
            {state.errors?.guestId &&
              state.errors.guestId.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Guest Phone Number*/}
        <div className="mb-4">
          <label htmlFor="guest" className="mb-2 block text-sm font-medium">
            Input Phone Number
          </label>
          <div className="relative">
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              placeholder="Input phone number"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="phoneNumber-error"
            />
            <icon.PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Guest Gender */}
        <div className="mb-4">
          <label htmlFor="guest" className="mb-2 block text-sm font-medium">
            Input Gender
          </label>
          <div className="relative">
            <input
              id="gender"
              name="gender"
              type="text"
              placeholder="Input gender"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="gender-error"
            />
            <icon.UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Guest email */}
        <div className="mb-4">
          <label htmlFor="guest" className="mb-2 block text-sm font-medium">
            Input Email
          </label>
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Input Email"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="email-error"
            />
            <icon.ComputerDesktopIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Guest Address */}
        <div className="mb-4">
          <label htmlFor="guest" className="mb-2 block text-sm font-medium">
            Input Address
          </label>
          <div className="relative">
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Input Address"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="address-error"
            />
            <icon.HomeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Guest Age */}
        <div className="mb-4">
          <label htmlFor="age" className="mb-2 block text-sm font-medium">
            IChoose your age
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="age"
                name="age"
                type="number"
                step="1"
                placeholder="choose your age"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="age-error"
              />
              <icon.UsersIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="age-error" aria-live="polite" aria-atomic="true">
            {state.errors?.amount &&
              state.errors.amount.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <div aria-live="polite" aria-atomic="true">
          {state.message ? (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
