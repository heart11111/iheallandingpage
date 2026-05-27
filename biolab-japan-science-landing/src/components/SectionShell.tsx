import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  eyebrow: string;
  title: string;
  copy?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
};

export function SectionShell({ id, eyebrow, title, copy, children, className, dark }: SectionShellProps) {
  return (
    <section id={id} className={cn("section-shell", dark && "section-dark", className)}>
      <div className="section-ambient" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="section-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          {copy ? <p className="section-copy">{copy}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
