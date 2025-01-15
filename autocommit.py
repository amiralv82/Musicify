import os
import time

# Path to your Git repository
REPO_PATH = "/Users/amir/Desktop/Final-Project/musicify full stack"

# Commit message template
COMMIT_MESSAGE = "Commit number {}"

# Number of commits to make
NUM_COMMITS = 100

# Time delay between commits (in seconds)
DELAY = 1  # You can adjust this as needed

def auto_commit(repo_path, num_commits, delay):
    # Change directory to the repository
    os.chdir(repo_path)
    
    for i in range(1, num_commits + 1):
        # Create a dummy change for each commit (optional, to ensure something to commit)
        with open(f"dummy_file_{i}.txt", "w") as f:
            f.write(f"This is auto-commit number {i}.\n")
        
        # Add changes
        os.system("git add .")
        
        # Commit changes
        commit_message = COMMIT_MESSAGE.format(i)
        os.system(f'git commit -m "{commit_message}"')
        
        # Print progress
        print(f"Committed: {commit_message}")
        
        # Delay for next commit
        time.sleep(delay)
    
    # Push all changes to GitHub
    os.system("git push origin main")
    print("All commits pushed to GitHub.")

if __name__ == "__main__":
    auto_commit(REPO_PATH, NUM_COMMITS, DELAY)