"use client";

import { useState } from "react";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";

export default function ProjectSection({ social, blogs }) {
    const [active, setActive] = useState("social");

    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <h1 className="heading">Projects</h1>
                <NativeSelect value={active} onChange={(e) => setActive(e.target.value)}>
                    <NativeSelectOption value="social">Social Media</NativeSelectOption>
                    <NativeSelectOption value="blogs">Blogs</NativeSelectOption>
                </NativeSelect>

            </div>
            {active === "social" ? social : blogs}
        </>
    );
}