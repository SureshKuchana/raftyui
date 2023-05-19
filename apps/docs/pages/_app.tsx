// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { slugifyWithCounter } from "@sindresorhus/slugify";
import { Inter, Lexend } from "next/font/google";
import { Layout } from "../components/Layout";
import Head from "next/head";
import { MarkdocNextJsPageProps } from "@markdoc/next.js";
import { RenderableTreeNodes } from "@markdoc/markdoc";

const sans = Inter({
  variable: "--font-sans",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const display = Lexend({
  variable: "--font-display",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500"],
});

function getNodeText(node: any) {
  let text = "";
  for (const child of node.children ?? []) {
    if (typeof child === "string") {
      text += child;
    }
    text += getNodeText(child);
  }
  return text;
}

function collectHeadings(
  nodes: RenderableTreeNodes,
  slugify = slugifyWithCounter()
): any {
  const sections = [];

  if (nodes) {
    for (const node of Array.isArray(nodes) ? nodes : [nodes]) {
      if (node && (node.name === "h2" || node.name === "h3")) {
        const title = getNodeText(node);
        if (title) {
          const id = slugify(title);
          node.attributes.id = id;
          if (node.name === "h3") {
            if (!sections[sections.length - 1]) {
              throw new Error(
                "Cannot add `h3` to table of contents without a preceding `h2`"
              );
            }
            sections[sections.length - 1].children.push({
              ...node.attributes,
              title,
            });
          } else {
            sections.push({ ...node.attributes, title, children: [] });
          }
        }
      }

      sections.push(...collectHeadings(node.children ?? [], slugify));
    }
  }

  return sections;
}

export default function App({
  Component,
  pageProps,
}: AppProps<MarkdocNextJsPageProps>) {
  const title = pageProps.markdoc?.frontmatter.title;

  const pageTitle =
    pageProps.markdoc?.frontmatter.pageTitle ||
    `${pageProps.markdoc?.frontmatter.title} - Docs`;

  const description = pageProps.markdoc?.frontmatter.description;

  const tableOfContents = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : [];

  return (
    <span className={`${display.variable} ${sans.variable} font-sans`}>
      <Head>
        <title>{pageTitle}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <Layout title={title} tableOfContents={tableOfContents}>
        <Component {...pageProps} />
      </Layout>
    </span>
  );
}