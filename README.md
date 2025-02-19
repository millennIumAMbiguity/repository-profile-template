# GitHub Repository Profile Template
See an example here: [millennIumAMbiguity.github.io](https://millenniumambiguity.github.io/)

## Setup
Update `username` in [js/data.js](js/data.js) with your GitHub username.

```javascript
export const username = "your-username";
```

## Run

1. Download the repository
2. Open the terminal
3. Navigate to the repository
4. Run the following command to install `http-server` globally

```sh
npm install -g http-server
```

5. Start the server by running the following command in the root directory of the repository

```sh
http-server
```

## Updating
If you are using this template and wish to update it with new changes in the template, you can perform the following steps.
1. run commands:
Add template repository as a remote.
```sh
git remote add template https://github.com/millennIumAMbiguity/repository-profile-template
```
Run git fetch to update the changes.
```sh
git fetch --all
```
Merge the branch from the new remote to your current one.
```sh
git merge template/main --allow-unrelated-histories
```
2. Resolve any/all conflicts.
3. Commit changes.
