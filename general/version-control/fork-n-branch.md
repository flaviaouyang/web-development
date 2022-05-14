# Fork-and-Branch Workflow

- The _fork and branch_ workflow is a common way of collaborating on open source projects using **Git** and **GitHUb**

- **Overview**:
  - Fork a GitHub Repository
  - Clone the forked repository to your local system
  - Add a Git remote for the original repository
  - Create a feature branch in which to place your changes
  - Make your changes to the new branch
  - Commit the changes to the branch
  - Push the branch to GitHub
  - Open a pull request from the new branch to the original repo
  - Clean up after your pull request is merged
- **Fork a GitHub repository**: forking is making a copy of the repository, but with a line back to the original

- log into GitHub with your account
- Find the GitHub repository that you'd like to work with
- Click the Fork button

- **Make a local clone**: find URL for the forked repository and use `git clone url`

- **Adding a Remote**:

  - Git already added a Git remote named `origin` to the clone of the Git repository.
  - This will allow you to push changes back up to the forked repository using `git commit` and `git push`
  - To use the _fork and branch_ workflow, you need to add a Git remote pointing back to the **original** repository.
    - you can name the git remote anything, one recommendation is **upstream**

- **Working in a Branch**

- create and checkout a _feature_ branch

`git checkout -b <new branch name>`

- make changes to the files

- commit your changes to the branch

- **Pushing changes to GitHub**: `git push origin <new branch name>`

- **Opening a Pull Request**:

  - GitHub will prompt you to create a pull request.
  - The maintainers of the original project can use this pull request to pull your changes across to their repository,
  - and if they approve, merge them into the main repo.

- **Cleaning up** after a merged pull request

- update local clone `git pull upstream master`
- delete feature branch `git branch -d <branch name>`
- update master branch in forked repository: `git push origin master`
- Push deletion of the feature branch to GitHub repository `git push --delete origin <branch name>`

- **Keeping your fork in sync**

  - `git pull upstream master` //pull changes from original repository
  - `git push origin master` //push changes to your forked repository
