import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sent | The Joke Mail Service",
  description: "Sent page for the Joke Mail Service.",
};

export default function Sent() {
  return <p className="text-bold text-center mt-10">There are no Sent mail.</p>;
}
