// Require Node.js Dependencies
const { spawnSync } = require("child_process");

// CONSTANTS
const BASH_CMD = "echo -e '\xE0\xA5\xA5' | wc -m";
const POWERSHELL_CMD = "echo '\xE0\xA5\xA5' | measure -Character | Select-Object -expand Characters";

/**
 * @func runSysCommand
 * @param {!String} command command to run on system!
 * @returns {Promise<Number>}
 */
function runSysCommand(command) {
    return new Promise((resolve, reject) => {
        const { error, stdout } = spawnSync("cmd", ["/c", command]);
        if (error) {
            return reject(error);
        }

        return resolve(Number(stdout.toString()));
    });
}

/**
 * @async
 * @func supportEmoji
 * @desc Detect if the parent pid (terminal) support emoji or not!
 * @returns {Promise<Boolean>}
 */
async function supportEmoji() {
    if (process.platform === "win32") {
        // eslint-disable-next-line
        const isPowershell = require("is-powershell");
        const termIsPowershell = await isPowershell();

        return await runSysCommand(termIsPowershell ? POWERSHELL_CMD : BASH_CMD) === 2;
    }

    return await runSysCommand(BASH_CMD) === 2;
}

module.exports = supportEmoji;
