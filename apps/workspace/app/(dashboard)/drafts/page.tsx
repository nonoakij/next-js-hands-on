import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drafts | The Joke Mail Service",
  description: "Drafts page for the Joke Mail Service.",
};

export default function Draft() {
  return (
    <p className="text-bold text-center mt-10">There are no Draft mail.</p>
  );
}
