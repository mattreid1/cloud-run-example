Google Cloud Run example
=====================

A quick start guide to [Google Cloud Run](https://cloud.google.com/run/) using Node.js 10.

Simply clone this repo and follow the instructions.

### Instructions
This assumes you already have a GCP project setup with `gcloud` and Docker also setup on your machine.
1. Build the Docker image by running `docker build ./` in this directory
2. Tag the Docker image by running `docker tag [hash] gcr.io/[project-id]/[app-name]` (replace `[project-id]` with your GCP project ID and `[app-name]` with a name for the service)
3. Enable the Container Registry API for your project in the Cloud Console
4. Authorise `docker` to push by running `gcloud auth configure-docker`
5. Push to Container Registry by running `docker push gcr.io/[project-id]/[app-name]`
6. Once uploaded, go to the Cloud Console, select to your project and then navigate to Cloud Run
7. Click the "Create Service" button
8. Choose the container image you just pushed and enter a service name
9. Check the "Allow unauthenticated invocations" box
10. Click "Create" and wait for it to deploy
11. Access it at the URL Cloud Run give you

If you get stuck, here's a [good video](https://youtu.be/3OP-q55hOUI?t=272) I found to help you out.