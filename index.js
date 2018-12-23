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
        // TODO: Spawn with parent terminal
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
    let CMD = BASH_CMD;
    if (process.platform === "win32") {
        const isPowershell = require("is-powershell");
        if (isPowershell) {
            CMD = POWERSHELL_CMD;
        }
    }

    return (await runSysCommand(CMD)) === 2;
}

module.exports = supportEmoji;
