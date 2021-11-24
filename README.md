# useLoaderData returns undefined

when nested action throws error and catches it in boundary

### Recreate the error

1. check out this repo
2. run `npm install && npm run dev`
3. open [localhost:3000/nested/new](http://localhost:3000/nested/new)
4. Click the button
5. See `Cannot read properties of undefined (reading 'demos')` which results from `useLoaderData` returning undefined
