import { Metadata } from "next";
import { notFound } from "next/navigation";
import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "../../prismicio";
import { components } from "../../../slices";

import { PageWrapper } from "../page-wrapper";

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const client = createClient();
  const page = await client.getByUID("page", params.uid);

  return {
    title: `${page.data.title}`,
    description: page.data.meta_description,
  };
}

export default async function Page({ params }) {
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());

  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  )
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}