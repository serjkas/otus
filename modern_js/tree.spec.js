// import { getPath } from "./get_path.js";
import { test, expect } from "vitest";
import { readdir } from "fs/promises";
import { tree } from "./tree";

test("getPath", async () => {
    const PR_ENV = process.argv;
    process.argv = [
        "/usr/local/bin/node",
        "/home/dev/proj/otus/modern_js/tree.js",
        "/home/dev/proj/otus/modern_js/foo"
    ];
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
    const data = await tree();
    expect(data).toEqual(out);
});
