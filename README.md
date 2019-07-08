### Demo service

![Coverage](https://api.venn.city/production/coverage/badge?branch=master&repository=demo-service)

* Setup CircleCI:
    * Open the projects page in CircleCI - https://circleci.com/add-projects/gh/venn-city
    * Find your project and click `Set up project`
    * Choose `Linux`, `Node`
    * Click `Start building`

* Environment variables:
    * Tests use .env for env vars
    * Run `npm run exportEnv` every time ssm variables you use change or the variables defined in `serverless.yml` change
