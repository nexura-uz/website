import { Logo } from "@/components/brand/Logo";

// Placeholder until the homepage (CLAUDE.md §8.1) is built.
export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center p-8">
      <Logo variant="lockup" className="h-8 w-auto text-primary" />
    </main>
  );
}
