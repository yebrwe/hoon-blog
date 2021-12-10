import PageLayout from "@components/layout/PageLayout";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";
export async function getStaticProps() {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage("683c5f84624c41f2a1dceed6d33a47de");
  const menus = await fetch(
    "https://notion-api.splitbee.io/v1/table/4ab6eb211fb84755b2eb960b116d57d5"
  ).then((res) => res.json());

  return {
    props: {
      recordMap,
      menus,
    },
  };
}
export default function Home({ recordMap, menus }) {
  return (
    <PageLayout menus={menus}>
      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
    </PageLayout>
  );
}
