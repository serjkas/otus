// import { getPath } from "./get_path.js";
import { test, expect } from "vitest";
import { readdir } from "fs/promises";
import { tree } from "./tree";

test("getPath", async () => {
    let out = {
        files: [
            "foo/f1.txt",
            "foo/f2.txt",
            "bar/bar1.txt",
            "bar/bar2.txt",
            "baz/baz1.txt"
        ],
        dirs: ["foo", "foo/bar", "bar/baz"]
    };
    const data = await tree("/home/dev/proj/otus/modern_js/foo");
    expect(data).toEqual(out);
});
