/**
 * page.js for NextJS 13
 */


import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "../prismicio";
import { components } from "../../slices";

import { PageWrapper } from "./page-wrapper";
import ProjectSelection from "./components/ProjectSelection/ProjectSelection";

export async function generateMetadata({ params }) {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.title,
    description: page.data.meta_description,
  };
}

export default async function Home(props) {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return (
    <>
        <SliceZone slices={page.data.slices} components={components} />
        <ProjectSelection />
    </>
  );
}