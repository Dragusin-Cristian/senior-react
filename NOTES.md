# NOTES FOR EACH SECTION

## SECTION 1: introduction to design systems. Atomic Deisgn Systems

- Atoms
- Molecules
- Organisms
- Templates
- Pages

## SECTION 8: publish to npm

- Create an organization on npm. The name must be the same with the package name in our project (as we did in the "renamed registry" commit)
- Add the  "publishConfig" field on every package.json and "private" field on the package you want to be private (as we did in the "publish to npm" commit)

- yarn package.json build and publish scripts fail for some reason, but they execute just fine. So from the terminal run separately "yarn build" and "yarn lerna publish" from the root folder

- add commit conventional commit with commitizen and commitlint and husky (as we did in "docs: add commitizen" and "fix(docs): add commit-lint")
