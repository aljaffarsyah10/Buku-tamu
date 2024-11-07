'use client';

import { GuestField } from '@/app/lib/definitions';
import Link from 'next/link';
import * as icon from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createInvoice, State } from '@/app/lib/actions';
import { useActionState } from 'react';

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

      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <label htmlFor="guest" className="mb-2 block text-m font-medium">
            Person Background
          </label>
        {/* Institute Name */}
        <div className="mb-4">
          <label htmlFor="guest" className="mb-2 block text-sm font-medium">
            Input Name Institute
          </label>
          <div className="relative">
              <input
                id="nameInstitute"
                name="nameInstitute"
                type="text"
                placeholder="Input name Institute"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="nameInstitute-error"
              />
            <icon.UserGroupIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
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

        {/* Guest NIP/NIM*/}
        <div className="mb-4">
          <label htmlFor="guest" className="mb-2 block text-sm font-medium">
            Input NIP/NIM
          </label>
          <div className="relative">
              <input
                id="nipnim"
                name="nipnim"
                type="text"
                placeholder="Please Input your NIP/NIM"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="nipnim-error"
              />
            <icon.UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Guest Employment */}
        <div className="mb-4">
          <label htmlFor="guest" className="mb-2 block text-sm font-medium">
            Input Employment
          </label>
          <div className="relative">
              <input
                id="employment"
                name="employment"
                type="text"
                placeholder="Input Employment"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="employment-error"
              />
            <icon.WrenchIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Guest Education */}
        <div className="mb-4">
          <label htmlFor="guest" className="mb-2 block text-sm font-medium">
            Input Education
          </label>
          <div className="relative">
              <input
                id="education"
                name="education"
                type="text"
                placeholder="Input Education"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="education-error"
              />
            <icon.HomeModernIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <label htmlFor="guest" className="mb-2 block text-m font-medium">
            Required Services
          </label>
        {/* Purpose */}
        <div className="mb-4">
          <label htmlFor="guest" className="mb-2 block text-sm font-medium">
            Input Purpose
          </label>
          <div className="relative">
              <input
                id="services"
                name="services"
                type="text"
                placeholder="Input Service Media"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="services-error"
              />
            <icon.UserGroupIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
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

        {/* Guest Data Requirement*/}
        <div className="mb-4">
          <label htmlFor="guest" className="mb-2 block text-sm font-medium">
            Input Data Requirement
          </label>
          <div className="relative">
              <input
                id="dataRequirement"
                name="dataRequirement"
                type="text"
                placeholder="Please Input your Data Requirement"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="dataRequirement-error"
              />
            <icon.UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Guest Type of Services */}
        <div className="mb-4">
          <label htmlFor="guest" className="mb-2 block text-sm font-medium">
            Input Type of Services
          </label>
          <div className="relative">
              <input
                id="typeOfServices"
                name="typeOfServices"
                type="text"
                placeholder="Input Type of Services"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="typeOfServices-error"
              />
            <icon.WrenchIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>
      
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <label htmlFor="guest" className="mb-2 block text-m font-medium">
            Purpose
          </label>
        {/* Purpose */}
        <div className="mb-4">
          <label htmlFor="guest" className="mb-2 block text-sm font-medium">
            Input Purpose
          </label>
          <div className="relative">
              <input
                id="purpose"
                name="purpose"
                type="text"
                placeholder="Input Purpose"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="purpose-error"
              />
            <icon.UserGroupIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
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

        {/* Guest Spesific data (explain)*/}
        <div className="mb-4">
          <label htmlFor="guest" className="mb-2 block text-sm font-medium">
            Input Spesific data (explain)
          </label>
          <div className="relative">
              <textarea
                id="spesificData"
                name="spesificData"
                placeholder="Please Input Spesific data (explain)"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="spesificData-error"
                rows={5}
                cols={50}
              />
            <icon.DocumentChartBarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

                {/* Guest Status */}
                <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the data status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="pending"
                  name="status"
                  type="radio"
                  value="pending"
                  className="text-white-600 h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 focus:ring-2"
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Pending <icon.ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="handled"
                  name="status"
                  type="radio"
                  value="handled"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="handled"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Handled <icon.CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
          <div id="status-error" aria-live="polite" aria-atomic="true">
            {state.errors?.status &&
              state.errors.status.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </fieldset>
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
