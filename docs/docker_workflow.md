# Build & publish Docker image for dev

This workflow builds and publishes a Docker image for the dev branch of the project. It is configured to run on every successful completion of the `Build & Test Node app (CI) for dev` workflow.

## on

The `on` section defines the events that trigger the workflow. In this case, the workflow will be triggered by a successful completion of the `Build & Test Node app (CI) for dev` workflow.

## concurrency

The `concurrency` section defines the concurrency settings for the workflow. In this case, the workflow will run in parallel, but only one job will run at a time for a given branch. This is to prevent jobs from interfering with each other.

## permissions

The `permissions` section defines the permissions that the workflow needs to run. In this case, the workflow needs to be able to read and write to the project's contents and packages.

## jobs

The `jobs` section defines the jobs that will be run by the workflow. In this case, there is a single job called `build-publish-docker`.

## steps

The `steps` section defines the steps that will be run by the `build-publish-docker` job. In this case, there are eight steps:

1. `uses: actions/checkout@v3`: This step checks out the code from GitHub.
2. `name: Set up Docker Buildx`: This step installs Docker Buildx and sets it up to use the v0.9.1 version.
3. `name: 'Login via Azure CLI'`: This step logs in to Azure using the credentials stored in the `AZURE_CREDENTIALS` secret.
4. `name: Log in to GitHub container registry`: This step logs in to the GitHub container registry using the credentials stored in the `GITHUB_TOKEN` secret.
5. `name: Log in to Docker Hub registry`: This step logs in to the Docker Hub registry using the credentials stored in the `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` secrets.
6. `name: Lowercase the repo name`: This step lowercases the name of the repository.
7. `name: Get friendly branch name`: This step gets a friendly name for the branch.
8. `name: Build and push container image to GitHub/Azure registry`: This step builds and pushes the Docker image to the GitHub, Docker Hub ~~and Azure container~~ registries.

9. `name: 'Deploy to Azure Container Instances'` step deploys the Docker image to Azure Container Instances. It uses the `azure/aci-deploy@v1` action, which takes the following parameters:

    * **resource-group:** The name of the Azure resource group where the container instance will be deployed.
    * **dns-name-label:** The DNS name label for the container instance.
    * **image:** The name of the Docker image to deploy.
    * **registry-login-server:** The URL of the registry where the Docker image is stored.
    * **registry-username:** The username for the registry.
    * **registry-password:** The password for the registry.
    * **name:** The name of the container instance.
    * **secure-environment-variables:** A list of environment variables to be passed to the container instance.
    * **location:** The Azure region where the container instance will be deployed.

The `azure/aci-deploy@v1` action will create a new container instance in the specified resource group and deploy the specified Docker image to it. The container instance will be assigned a DNS name label, which can be used to access it from the internet. The `secure-environment-variables` parameter can be used to pass environment variables to the container instance that should be kept secret.


