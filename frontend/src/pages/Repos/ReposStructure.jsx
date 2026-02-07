const ReposStructure = ({ repos, handleclick }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <h2>Select a Repository</h2>
        <ul>
          {repos.map((repo) => (
            <li key={repo.fullName}>
              {repo.name} {repo.private ? "(Private)" : ""}
              <button
                className="px-1 py-1 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
                onClick={() => handleclick(repo)}
              >
                import
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReposStructure;

