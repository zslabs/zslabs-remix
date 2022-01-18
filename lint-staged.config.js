module.exports = {
  '**/*.ts?(x)': () => 'npm run type:check',
  // Run ESLint on changes to JavaScript/TypeScript files
  '**/*.(ts|js)?(x)': (filenames) => `npm run lint ${filenames.join(' ')}`,
}
