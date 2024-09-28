"use client";
import ForumThreads from "@/components/Forum/ForumThreads/ForumThreads";
import Hero from "@/components/Forum/Hero";
import View from "@/components/View";
import { toTitleCase } from "@/utils/toTitleCase";
import { Box } from "@mui/material";
import { useParams } from "next/navigation";

const CategoryDetails = () => {
  const { category } = useParams<{ category: string }>();

  return (
    <View>
      <Hero
        title={toTitleCase(category)}
        subtitle="Join the conversation and share your thoughts with the community."
        gradientColor="secondary"
      />
      <ForumThreads />
      <Box sx={{ marginTop: 2 }} />
    </View>
  );
};

export default CategoryDetails;
