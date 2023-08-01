"use client";

import Button from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";
import { cn } from "@/lib/utils";
import React from "react";
import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";

type FormValues = {
  cart: {
    name: string;
    price: number;
    quantity: number;
  }[];
};

const Total = ({ control }: { control: Control<FormValues> }) => {
  const formValues = useWatch({
    name: "cart",
    control,
  });
  const total = formValues.reduce(
    (acc, current) => acc + (current.price || 0) * (current.quantity || 0),
    0
  );
  return <p>Total Amount: {total}</p>;
};

export default function ExampleForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      cart: [{ name: "test", quantity: 1, price: 23 }],
    },
    mode: "onBlur",
  });

  const { fields, append, remove } = useFieldArray({
    name: "cart",
    control,
  });

  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {fields.map((field, index) => {
          return (
            <div key={field.id} className="p-6 bg-white border rounded-lg">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Name
              </label>

              <Input
                id="name"
                placeholder="name"
                {...register(`cart.${index}.name` as const, {
                  required: true,
                })}
                className={cn("text-sm font-[300] mt-1", {
                  "border-destructive": errors?.cart?.[index]?.name,
                })}
              />

              <label
                htmlFor="name"
                className="block mt-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Quantity
              </label>

              <Input
                id="quantity"
                placeholder="quantity"
                type="number"
                {...register(`cart.${index}.quantity` as const, {
                  valueAsNumber: true,
                  required: true,
                })}
                error={errors?.cart?.[index]?.name?.message}
              />

              <label
                htmlFor="value"
                className="block mt-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Value
              </label>

              <Input
                placeholder="value"
                type="number"
                {...register(`cart.${index}.price` as const, {
                  valueAsNumber: true,
                  required: true,
                })}
                className={cn("text-sm font-[300] mt-1", {
                  "border-destructive": errors?.cart?.[index]?.name,
                })}
              />

              <Button
                type="button"
                onClick={() => remove(index)}
                className="mt-4 bg-red-500"
              >
                DELETE
              </Button>
            </div>
          );
        })}

        <Total control={control} />

        <Button
          variant="ghost"
          className="mr-4"
          type="button"
          onClick={() =>
            append({
              name: "",
              quantity: 0,
              price: 0,
            })
          }
        >
          Append
        </Button>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
