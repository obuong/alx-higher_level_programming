import requests
import sys

# Get the repository and owner names from command line arguments
repo_name = sys.argv[1]
owner_name = sys.argv[2]

# Define the GitHub API endpoint for listing repository commits
api_url = f"https://api.github.com/repos/{owner_name}/{repo_name}/commits"

# Send a GET request to the API endpoint to retrieve the commits
response = requests.get(api_url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the JSON response into a list of commits
    commits = response.json()

    # Print the 10 most recent commits
    for commit in commits[:10]:
        sha = commit["sha"]
        author_name = commit["commit"]["author"]["name"]
        print(f"{sha}: {author_name}")
else:
    # Print an error message if the request was unsuccessful
    print(f"Error: {response.status_code} - {response.reason}")

