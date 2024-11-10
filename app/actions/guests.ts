"use server";

// Import the database client and the Post type from Prisma
import { db } from "@/app/db";
import type { guestdata } from "@prisma/client";

// Import the revalidatePath and redirect functions from Next.js
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Import the Zod library for validation
import { z } from "zod";

// Define a schema for the post using Zod
const guestSchema = z.object({
  // the title must be a string between 3 and 255 characters
  name: z.string().min(3).max(255),
  // the content must be a string between 10 and 4000 characters
  address: z.string().min(3).max(4000),
  phoneNumber: z.string().min(3).max(4000),
  gender: z.string(),
  email: z.string().email(),
  age: z.number().int().positive(),
  nameInstitute: z.string(),
  nipnim: z.string(),
  employment: z.string(),
  education: z.string(),
});

// Define an interface for the form state
interface GuestFormState {
  errors: {
    name?: string[];
    address?: string[];
    gender?: string[];
    email?: string[];
    age?: string[];
    nameInstitute?: string[];
    nipnim?: string[];
    employment?: string[];
    education?: string[];
    _form?: string[];
  };
}

// Define an asynchronous function to create a post
export async function createGuest(
  formState: GuestFormState,
  formData: FormData
): Promise<GuestFormState> {
  // Validate the form data against the post schema
  // If the form data does not match the schema, the safeParse method returns an object
  // with a success property of false and an error property containing the validation errors.
  // If the form data matches the schema, the safeParse method returns an object
  // with a success property of true and a data property containing the validated data.
  const result = guestSchema.safeParse({
    name: formData.get("name"),
    phoneNumber: formData.get("phoneNumber"),
    gender: formData.get("gender"),
    email: formData.get("email"),
    address: formData.get("address"),
    age: parseInt(formData.get("age") as string, 10),
    nameInstitute: formData.get("nameInstitute"),
    nipnim: formData.get("nipnim"),
    employment: formData.get("employment"),
    education: formData.get("education"),
  });

  // If validation fails, return the errors
  if (!result.success) {
    console.log("Validation failed", result.error.flatten().fieldErrors);
    return {
      // The flatten method is used to convert the validation errors into a flat object structure
      // that can be easily displayed in the form.
      errors: result.error.flatten().fieldErrors,
    };
  }

  let guest: guestdata;
  try {
    // If validation passes, create a new post in the database
    guest = await db.guestdata.create({
      data: {
        name: result.data.name,
        address: result.data.address,
        phoneNumber: result.data.phoneNumber,
        gender: result.data.gender,
        email: result.data.email,
        age: result.data.age,
        nipnim: result.data.nipnim,
        nameInstitute: result.data.nameInstitute,
        employment: result.data.employment,
        education: result.data.education,
      },
    });
  } catch (error: unknown) {
    // If there's an error, return it
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong"],
        },
      };
    }
  }

  // Revalidate the path and redirect to the home page
  revalidatePath("/");
  // redirect("/");
  redirect("/");
}

export async function updateGuest(
  id: string,
  formState: GuestFormState,
  formData: FormData
): Promise<GuestFormState> {
  const result = guestSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  let guest: guestdata;
  try {
    guest = await db.guestdata.update({
      where: { id: parseInt(id, 10) },
      data: {
        name: result.data.name,
        address: result.data.address,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong"],
        },
      };
    }
  }

  revalidatePath("/");
  redirect("/");
}

export async function deleteGuest(id: number): Promise<GuestFormState> {
  let guest: guestdata;
  try {
    guest = await db.guestdata.delete({
      where: { id },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong"],
        },
      };
    }
  }

  revalidatePath("/");
  redirect("/");
}
