'use client'

import { useCallback, useState } from "react";
import styles from "./page.module.scss";
import { Box, Button, Card, CardContent, Chip, Typography } from "@mui/material";
import ideas, { Ideas } from "./ideas";

const difficultyLevels = ["All", "Easy", "Medium", "Hard"];

export default function Home() {
  const [difficulty, setDifficulty] = useState("All");
  const [idea, setIdea] = useState<string | null>(null);

  const generateIdea = useCallback(() => {
    let filteredIdeas;
    if (difficulty === "All") {
      filteredIdeas = [...ideas.easy, ...ideas.medium, ...ideas.hard];
    } else {
      filteredIdeas = ideas[difficulty.toLowerCase() as keyof Ideas];
    }
    const randomIndex = Math.floor(Math.random() * filteredIdeas.length);
    setIdea(filteredIdeas[randomIndex]);
  }, [difficulty]);

  return (
    <Box component="main" className={styles.container}>
      <Typography variant="h1" component="h1">
        Rejection Therapy Ideas Generator
      </Typography>
      <Typography variant="h5" component="h2">
        Overcome your fear of rejection by practicing with these ideas.
      </Typography>
      <Box className={styles.categories}>
        {difficultyLevels.map((level) => (
          <Chip
            key={level}
            label={level}
            color={level === difficulty ? "primary" : undefined}
            onClick={() => setDifficulty(level)}
          />
        ))}
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={generateIdea}
      >
        Generate Idea
      </Button>
      {idea && (
        <Card className={styles.card}>
          <CardContent>
            <Typography variant="h6" component="h2">
              {idea}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
}
