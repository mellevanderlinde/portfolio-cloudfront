import { BlogPosts } from "./components/posts";
import { Header1 } from "./components/header";
import { Link } from "next-view-transitions";
import { Paragraph } from "./components/paragraph";
import { PreloadResources } from "./components/preload";
import { ReactNode } from "react";

export default function Page(): ReactNode {
  return (
    <section>
      <PreloadResources />
      <Header1 title="My Portfolio" />
      <Paragraph
        content={
          <>
            {`I have an interest in cloud engineering, machine learning, technology 
            and sustainability. After completing my Master's in Behavioural Data Science, 
            I joined PostNL as MLOps Engineer, where I now `}
            <Link href="/work">work</Link>
            {" as Cloud Engineer."}
          </>
        }
      />
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
