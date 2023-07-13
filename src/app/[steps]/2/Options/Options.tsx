"use client";

import React, { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "@/components/ui/Button/Button";
import useOptionsStore from "@/app/store/options";
import { Option } from "@/types/options";

export default function Options() {
  const { options, setOptions, removeOption } = useOptionsStore();
  const [title, setTitle] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newOptions = [
      ...options,
      {
        id: uuidv4(),
        title,
      },
    ];

    setOptions(newOptions);
    setTitle("");
  };

  const handleDelete = (option: Option) => {
    removeOption(option);
  };

  return (
    <div className="font-[300]">
      <ul className="space-y-4">
        {options.map((option) => (
          <li
            key={option.id}
            className="bg-white rounded-[4px] p-4 flex justify-between items-center"
          >
            {option.title}

            <button
              type="button"
              className="text-red-500"
              onClick={() => handleDelete(option)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="flex flex-col mt-4 space-y-8">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-neutral-6 rounded-[4px] p-4"
        />

        <div className="h-[1px] bg-neutral-6" />

        <div>
          <Button type="submit">Add option</Button>
        </div>
      </form>
    </div>
  );
}
