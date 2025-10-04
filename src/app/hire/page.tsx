import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, hire, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: hire.title,
    description: hire.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(hire.title)}`,
    path: hire.path,
  });
}

export default function Hire() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={hire.title}
        description={hire.description}
        path={hire.path}
        image={`/api/og/generate?title=${encodeURIComponent(hire.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${hire.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      Hire page
    </Column>
  );
}
