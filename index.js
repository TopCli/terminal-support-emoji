// Import Node.js Dependencies
import { spawnSync } from "child_process";

// CONSTANTS
const kBashCmd = "echo -e '\xE0\xA5\xA5' | wc -m";
const kPowershellCmd = "echo '\xE0\xA5\xA5' | measure -Character | Select-Object -expand Characters";
const kNumberOfChars = 12;

/**
 * @func runSysCommand
 * @param {!String} command command to run on system!
 * @returns {Promise<Number>}
 */
function runSysCommand(command) {
  const { stdout } = spawnSync("cmd", ["/C", command]);

  return Number(stdout.toString());
}

/**
 * @async
 * @func supportEmoji
 * @desc Detect if the parent pid (terminal) support emoji or not!
 * @returns {Promise<Boolean>}
 */
export async function supportEmoji() {
  if (process.platform === "win32") {
    const isPowershell = (await import("is-powershell")).default;
    const termIsPowershell = await isPowershell();

    return runSysCommand(termIsPowershell ? kPowershellCmd : kBashCmd) === kNumberOfChars;
  }

  return runSysCommand(kBashCmd) === kNumberOfChars;
}
