"use client";
import React from "react";
import { Button } from "../ui/moving-border";

export function MovingBorderDemo() {
    return (
        <div>
            <Button
                borderRadius="1rem"
                className="bg-primary dark:text-white border-neutral-200"
            >
                Borders are cool
            </Button>
            
        </div>
    );
}
