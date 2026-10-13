interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  number,
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === "center" ? "text-center mx-auto" : "text-left"
      } max-w-3xl`}
    >
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121918] border border-[#aeccc6]/20 text-[#bbe9db] text-xs font-mono uppercase tracking-wider mb-3`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#bbe9db]" />
        <span>{number}</span>
        <span className="text-[#757a79]">/</span>
        <span className="text-[#aeccc6]">{title}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f0f9f6]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-[#9ba6a5] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
