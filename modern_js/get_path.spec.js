// import { getPath } from "./get_path.js";
import { test, expect } from "vitest";
import { JSDOM } from "jsdom";
import { readFile } from "fs/promises";
import { getPath } from "./get_path.js";

test("getPath", async () => {
    const html = await readFile("./index.html", { encoding: "utf-8" });
    const jsDom = new JSDOM(html, { runScripts: "dangerously" });
    let doc = jsDom.window.document;

    const test = doc.getElementById("test");

    console.log(getPath(test));
});
