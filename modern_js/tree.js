import fs from "fs/promises";
const all_dirs = [],
    all_files = [];

const file_pattern = "\\.[^.]*$";
const path_pattern = "[^/]*$";

const getFiles = async (system_path) => {
    const path = [],
        dirs = [],
        files = [];

    try {
        const system_files = await fs.readdir(system_path);
        path.unshift(system_path.match(path_pattern)[0]);

        for (const file of system_files) {
            let is_file = file.match(file_pattern);
            if (is_file) {
                files.push(`${path.join("/")}/${file}`);
            } else {
                dirs.unshift(`${path.join("/")}/${file}`);
                await getFiles(`${system_path}/${file}`);
            }
        }
        if (files.length !== 0) {
            all_files.unshift(...files);
        }
        if (dirs.length !== 0) {
            all_dirs.unshift(...dirs);
        }
    } catch (err) {
        console.error(err, "err");
    }
};

export const tree = async () => {
    // arg
    const system_path = process.argv[2];

    await getFiles(system_path);
    all_dirs.unshift(system_path.match(path_pattern)[0]);
    let data = {
        files: all_files,
        dirs: all_dirs
    };
    return data;
};

// console.log(await tree("/home/dev/proj/otus/modern_js/foo"));
// console.log(await tree());
