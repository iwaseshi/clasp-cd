// @ts-check

/** @type {import('jest').Config} */
const config = {
  verbose: true,
  silent: true,
  transform: {
    '.ts$': 'esbuild-jest',
  },
}

module.exports = config
