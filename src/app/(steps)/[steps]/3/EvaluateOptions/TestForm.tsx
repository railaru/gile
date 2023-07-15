"use client";

import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
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

export default function TestForm() {
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
            <div key={field.id} className="space-y-4">
              <section className={"section"} key={field.id}>
                <label htmlFor="name" className="text-sm">
                  Name
                </label>

                <Input
                  id="name"
                  placeholder="name"
                  {...register(`cart.${index}.name` as const, {
                    required: true,
                  })}
                  className={errors?.cart?.[index]?.name ? "error" : ""}
                />

                <label htmlFor="quantity" className="text-sm">
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
                  className={errors?.cart?.[index]?.quantity ? "error" : ""}
                />

                <Input
                  placeholder="value"
                  type="number"
                  {...register(`cart.${index}.price` as const, {
                    valueAsNumber: true,
                    required: true,
                  })}
                  className={errors?.cart?.[index]?.price ? "error" : ""}
                />

                <Button
                  type="button"
                  onClick={() => remove(index)}
                  className="bg-red-500"
                >
                  DELETE
                </Button>
              </section>
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
          APPEND
        </Button>

        <Button type="submit">SUBMIT</Button>
      </form>
    </div>
  );
}
