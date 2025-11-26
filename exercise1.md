Common steps in a CI setup for Python:

Make sure you have clean and isolated environment for each pipeline run. Project structure is important to organize the project.

- src/: contains the main application code
- tests/: Contains all the test files
- requirements.txt: Lists all project dependencies with versions
- .github/workflows/: Contains GitHub Actions workflow definitions.

To test Python project first we need to lint the code. That is because we want to analyze code for potential errors. We can do that with flake8. After this it is time to do unit testing. It's main purpose is to check single function or unit of code. This can be made with pytest.

Do security scanning for your code base for security vulnerabilities as part of your pipeline to ensure safe deployments.

Make sure the main branch is in deployable stage at all the times.

Alternatives for GitHub Action and Jenkins:

Northflank being said it's somewhere in the middle. If GitHub Actions feels too limited and Jenkins too heavy.

Would this be better for self-hosted or cloud-based environment?

Probably, it's CI/CD pipeline is connected to GitHub. It has automatic builds with logs, history and status in one place. It can deployed from Dockerfiles, containers or buildpacks. No need for plugin setup, no agent maintenance or no YAML lock-in.
