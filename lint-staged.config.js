module.exports = {
  // @NOTE Commented out until mdx-bundler type issue is resolved
  // '**/*.ts?(x)': () => 'npm run type:check',
  // Run ESLint on changes to JavaScript/TypeScript files
  '**/*.(ts|js)?(x)': (filenames) => `npm run lint ${filenames.join(' ')}`,
}
