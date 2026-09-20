import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="text-sm text-muted">404</p>
      <h1 className="mt-4 max-w-2xl font-display text-[52px] leading-[0.95] md:text-[80px]">
        This page drifted off the canvas.
      </h1>
      <p className="mt-5 max-w-md text-base leading-7 text-muted">
        The link might be old, or the page never existed. Let’s get you back to
        the work.
      </p>
      <div className="mt-8 flex gap-3">
        <ButtonLink href="/">Go home</ButtonLink>
        <ButtonLink href="/#projects" variant="ghost">
          See work
        </ButtonLink>
      </div>
    </Container>
  );
}
