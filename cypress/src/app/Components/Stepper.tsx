"use client";
import { HTMLAttributes, useState } from "react";
import Button from "./Button";

interface StepperProps extends HTMLAttributes<HTMLDivElement> {
    defaultCount?: number;
}

export function Stepper({ defaultCount, ...rest }: StepperProps) {
    const [count, setCount] = useState<number>(defaultCount ?? 0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div
            {...rest}
            className="flex justify-center items-center gap-5 text-white h-screen w-screen bg-black"
        >
            <Button
                data-cy="increment.button"
                onClick={increment}
                className="active:bg-blue-600 bg-blue-500 px-10 py-5 rounded"
                label="+"
            />
            <div data-cy="state.label" className="font-mono text-2xl">
                {count}
            </div>
            <Button
                data-cy="decrement.button"
                onClick={decrement}
                className="active:bg-red-600 bg-red-500 px-10 py-5 rounded"
                label="-"
            />
        </div>
    );
}
