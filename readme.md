# Node.js CI-CD Security Pipeline

This project utilizes GitHub Actions for automating various stages of the development workflow. It consists of five jobs: `build-testing`, `mend-scanning`, `sonarqube-scanning`, `deploy`, and `zap-scanning`. The jobs are organized in a sequential and parallel manner to ensure efficient and reliable deployment.

## Workflow Overview

The workflow is designed as follows:

1. **Build & Testing**

   - The `build-testing` job compiles and tests the code.
   - It runs in parallel with the `mend-scanning` and `sonarqube-scanning` jobs.
   - Upon completion of all parallel jobs, the workflow proceeds to the next step.

2. **Mend Scanning**

   - The `mend-scanning` job uses the "Mend" tool for security scanning, using the Unified Agent method. Check `Mend.Unified-Agent.txt` for more details.
   - It runs in parallel with the `build-testing` and `sonarqube-scanning` jobs.
   - Upon completion of all parallel jobs, the workflow proceeds to the next step.

3. **SonarQube Scanning**

   - The `sonarqube-scanning` job analyzes code quality using SonarQube.
   - It runs in parallel with the `build-testing` and `mend-scanning` jobs.
   - Upon completion of all parallel jobs, the workflow proceeds to the next step.

4. **Deployment**

   - The `deploy` job deploys the application.
   - It runs sequentially after the completion of the `build-testing`, `mend-scanning`, and `sonarqube-scanning` jobs.
   - The deployment step requires the successful completion of the previous jobs.

5. **ZAP Scanning**
   - The `zap-scanning` job performs security scanning using the OWASP ZAP tool.
   - It runs sequentially after the completion of the `deploy` job.
   - The ZAP scanning step depends on a successful deployment.

## Customizing the Workflow

You can customize the GitHub Actions workflow by modifying the `.github/workflows/dev.yml` file. This file defines the workflow configuration and job dependencies. Feel free to adjust the steps, add new jobs, or incorporate additional tools as required by your project's needs.

For more information about GitHub Actions and workflow customization, refer to the [GitHub Actions documentation](https://docs.github.com/en/actions).
