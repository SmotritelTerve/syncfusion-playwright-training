# Syncfusion Playwright Training

Make use of https://ej2.syncfusion.com/ to learn test automation with Playwright and TypeScript

https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard

## Run tests

To run all tests execute in terminal

```bash
npm run test
```
Run tests in headed mode

```
npm run test --headed
```

Run tests in ui mode

```
npm run test --ui
```

Run tests only in Chrome

```
npx playwright test --project='chromium' --headed
```

Run tests in debug mode

```
npx playwright test --project='chromium' --debug
```

To run tests marked by "tag" for example @smoke:

```
npx playwright test --project='chromium' --grep @smoke --headed
```

To run tests for Doctors page:

```
npx playwright test --project='chromium' --grep @doctors --headed
```

## License

[MIT](https://choosealicense.com/licenses/mit/)