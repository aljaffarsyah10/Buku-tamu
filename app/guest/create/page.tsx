import { createGuest } from "@/app/actions/guests";
import GuestForm from "@/components/guest-form";

// create a new server component PostsCreate.
export default function GuestsCreate() {
  return (
    <main className="flex min-h-screen flex-col items-start p-24">
      <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <GuestForm
          formAction={createGuest}
          initialData={{
            name: "",
            phoneNumber: "",
            gender: "",
            email: "",
            address: "",
            nameInstitute: "",
            nipnim: "",
            employment: "",
            education: "",
            age: 0,
          }}
        />
      </div>
    </main>
  );
}
