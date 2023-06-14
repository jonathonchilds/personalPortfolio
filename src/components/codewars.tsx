import { useState, useEffect } from "react";

interface UserData {
  username: string;
  honor: number;
  clan: string;
  skills: string[];
  codeChallenges: {
    totalAuthored: number;
    totalCompleted: number;
  };
  ranks: {
    overall: Rank;
    languages: {
      [key: string]: Rank;
    };
  };
}

interface Rank {
  rank: number;
  name: string;
  color: string;
  score: number;
}

const UserData = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://www.codewars.com/api/v1/users/jonathonchilds"
        );
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!userData) {
    return <p>No user data available.</p>;
  }
  console.log(userData.skills);

  return (
    <div className="container mx-auto py-8" id="codewars">
      <h1 className="text-3xl font-bold mb-4">User Information</h1>
      <p className="mb-2">
        <strong>Username:</strong> {userData.username}
      </p>
      <p className="mb-2">
        <strong>Honor:</strong> {userData.honor}
      </p>
      <p className="mb-2">
        <strong>Clan:</strong> {userData.clan || "None"}
      </p>
      <p className="mb-2">
        <strong>Code Challenges Completed:</strong>{" "}
        {userData.codeChallenges.totalCompleted}
      </p>
      <h2 className="text-2xl font-bold mb-2">Ranks</h2>
      <p>
        <strong>Overall Rank:</strong> {userData.ranks.overall.name}
      </p>
      {Object.entries(userData.ranks.languages).map(([language, rank]) => (
        <p key={language}>
          <strong>{language} Rank:</strong> {rank.name}
        </p>
      ))}
    </div>
  );
};

export default UserData;
